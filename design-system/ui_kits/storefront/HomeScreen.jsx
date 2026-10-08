// Homepage — node 201:89
const homeTiles = [
  [['collection-clothing.png', 'Clothing & Shoes', 'Knitwear, dresses, layers, boots and comfortable everyday styles.'],
   ['collection-bags-jewelry.png', 'Bags & Jewelry', 'Handbags, jewelry and finishing touches chosen for everyday elegance.'],
   ['collection-home-living.png', 'Home & Living', 'Warm accents, useful pieces and everyday comforts for every room.']],
  [['collection-gifts-hobbies.png', 'Gifts & Hobbies', 'Thoughtful gifts, craft kits and creative finds for time well spent.'],
   ['collection-christmas.png', 'Christmas Shop', 'Festive décor, meaningful gifts and craft kits for a warm Christmas.']],
];
const favourites = [
  ['OUTERWEAR', 'Ribbed Knit Coat With Denim Panels', '$59.99'],
  ['BOTTOMS', 'Tailored Utility Pants for Work and Weekend', '$64.99'],
  ['OUTERWEAR', 'V-Neck Single-Button A-Line Blazer', '$79.99'],
];

function CollectionTile({ img, title, body, go }) {
  return (
    <div onClick={() => go('collection')} style={{ flex: 1, height: 387, cursor: 'pointer', background: `linear-gradient(180deg, rgba(0,0,0,0.05) 50.13%, rgb(22,2,9) 100%), url(${IMG + img}) center / cover no-repeat`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 8, padding: 16, boxSizing: 'border-box' }}>
      <h3 style={kitText.h3}>{title}</h3>
      <p style={{ ...kitText.body, fontSize: 14, color: 'var(--color-bg-parchment)' }}>{body}</p>
    </div>
  );
}

function HomeScreen({ go }) {
  const [i, setI] = React.useState(1);
  return (
    <div data-screen-label="Homepage">
      <section style={{ position: 'relative', height: 500, background: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(102,102,102,0) 100%), linear-gradient(rgba(41,38,36,0.16),rgba(41,38,36,0.16)), url(${IMG}hero-lifestyle.png) center / cover no-repeat` }}>
        <div style={{ position: 'absolute', left: 96, top: 122, width: 597, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h1 style={kitText.h1}>What you wear & how you live, weaved beautifully together</h1>
            <p style={{ ...kitText.body, width: 508, color: 'var(--color-bg-parchment)' }}>A thoughtful edit of easy fashion, comfortable footwear, and beautiful things for home. Chosen for the woman you are now.</p>
          </div>
          <DT.Button size="standard" label="Shop by collection" style={{ width: 239 }} onClick={() => go('collection')} />
        </div>
      </section>
      <section style={{ width: 1024, margin: '64px auto 0', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '9px 0' }}>
          <p style={kitText.eyebrow}>Shop by collection</p>
          <h2 style={kitText.h2}>What are you looking for today?</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {homeTiles.map((row, r) => <div key={r} style={{ display: 'flex', gap: 20 }}>{row.map(([img, t, b]) => <CollectionTile key={t} img={img} title={t} body={b} go={go} />)}</div>)}
        </div>
      </section>
      <section style={{ width: 1024, height: 417, margin: '32px auto 0', background: 'var(--color-bg-parchment)', display: 'flex', alignItems: 'center', gap: 32 }}>
        <div style={{ width: 416, padding: '0 48px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h2 style={kitText.h2}>Can’t decide?</h2>
            <p style={kitText.body}>Take a look through everything we’ve gathered, from easy everyday style to thoughtful gifts and beautiful things for home.</p>
          </div>
          <DT.Button size="standard" label="Shop All" style={{ width: 142 }} onClick={() => go('collection')} />
        </div>
        <div style={{ flex: 1, alignSelf: 'stretch', background: `url(${IMG}shop-all.png) center / cover no-repeat` }} />
      </section>
      <section style={{ width: 1024, margin: '64px auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        <div style={{ width: 432, display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'center' }}>
          <h2 style={{ ...kitText.h2, whiteSpace: 'nowrap' }}>Some of our fashion favourites</h2>
          <p style={kitText.body}>You do not have to sort through everything. Here are a few easy-to-love pieces to help you begin.</p>
        </div>
        <div style={{ position: 'relative', width: 867, height: 520 }}>
          {favourites.map(([c, t, p], k) => {
            const slot = (k - i + 1 + 3) % 3;
            return (
              <div key={t} onClick={() => go('product')} style={{ position: 'absolute', left: slot * 291 - (slot === 2 ? 6 : 0), top: slot === 1 ? 16 : 0, opacity: slot === 1 ? 1 : 0.7, cursor: 'pointer', transition: 'left 320ms var(--ease-standard), top 320ms var(--ease-standard), opacity 320ms' }}>
                <DT.ProductCard category={c} title={t} price={p} image={IMG + 'product-coat.png'} />
              </div>
            );
          })}
        </div>
        <div onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setI((v) => (v + (e.clientX - r.left < 64 ? 2 : 1)) % 3); }} style={{ cursor: 'pointer' }}>
          <DT.CarouselControls size="desktop" />
        </div>
      </section>
      <SplitFeature imageLeft image="editorial-gifting.png" title="Gifting season is here" body="For the woman who would rather enjoy December than rush through it. Start early with thoughtful gifts and festive finds for everyone you love." cta="Christmas shop" onCta={() => go('collection')} />
      <SplitFeature mirror image="editorial-philosophy.png" title="Chosen for the life you’re living" body="Dove & Thistle brings together easy clothing, comfortable footwear and thoughtful pieces for home and gifting. A considered collection for women who know what they like and believe the everyday can still feel a little special." cta="Our philosophy" />
      <div style={{ width: 1024, margin: '32px auto 0' }}><DT.TrustStrip /></div>
      <div style={{ width: 880, margin: '32px auto 64px' }}><DT.FAQSection /></div>
    </div>
  );
}
window.HomeScreen = HomeScreen;
