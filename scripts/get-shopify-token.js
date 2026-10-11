const http = require('http');
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ENV_PATH = path.join(__dirname, '..', '.env');

function loadEnv() {
  const env = {};
  fs.readFileSync(ENV_PATH, 'utf8').split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) env[match[1].trim()] = match[2].trim();
  });
  return env;
}

const env = loadEnv();
const CLIENT_ID = env.SHOPIFY_CLIENT_ID;
const CLIENT_SECRET = env.SHOPIFY_CLIENT_SECRET;
const STORE = env.SHOPIFY_STORE;
const SCOPES = 'write_products,read_products,write_inventory,read_inventory,read_locations';
const REDIRECT_URI = 'http://localhost:3456/callback';
const NONCE = crypto.randomBytes(16).toString('hex');

if (!CLIENT_ID || !CLIENT_SECRET || !STORE) {
  console.error('Missing SHOPIFY_CLIENT_ID, SHOPIFY_CLIENT_SECRET, or SHOPIFY_STORE in .env');
  process.exit(1);
}

function exchangeCodeForToken(code) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
    });

    const req = https.request({
      hostname: STORE,
      path: '/admin/oauth/access_token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (data.access_token) {
            resolve(data.access_token);
          } else {
            reject(new Error(`No access_token in response: ${body}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${body}`));
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost:3456');

  if (url.pathname === '/callback') {
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (state !== NONCE) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('State mismatch — possible CSRF. Try again.');
      return;
    }

    if (!code) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('No authorization code received.');
      return;
    }

    try {
      const token = await exchangeCodeForToken(code);

      // Append token to .env
      let envContent = fs.readFileSync(ENV_PATH, 'utf8');
      if (envContent.includes('SHOPIFY_ACCESS_TOKEN=')) {
        envContent = envContent.replace(/SHOPIFY_ACCESS_TOKEN=.*/, `SHOPIFY_ACCESS_TOKEN=${token}`);
      } else {
        envContent = envContent.trimEnd() + `\nSHOPIFY_ACCESS_TOKEN=${token}\n`;
      }
      fs.writeFileSync(ENV_PATH, envContent);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <h1>Access token saved!</h1>
        <p>Token has been written to <code>.env</code>. You can close this tab and stop the script.</p>
      `);

      console.log('\nAccess token saved to .env');
      console.log('You can close this tab and press Ctrl+C to stop.');

      setTimeout(() => process.exit(0), 2000);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Error exchanging code for token: ${err.message}`);
      console.error(err);
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3456, () => {
  const authUrl = `https://${STORE}/admin/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${NONCE}`;

  console.log('Local server listening on http://localhost:3456');
  console.log('\nOpening Shopify authorization page...\n');
  console.log(`If it doesn't open automatically, visit:\n${authUrl}\n`);

  try {
    execSync(`xdg-open "${authUrl}" 2>/dev/null || open "${authUrl}" 2>/dev/null`);
  } catch {
    // Manual open fallback — URL already printed above
  }
});
