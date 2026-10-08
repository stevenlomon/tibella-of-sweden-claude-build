// Shared storefront chrome + tiny primitives used across kit screens.
const DT = window.DoveThistleDesignSystem_e5a4b5;
const IMG = '../../assets/images/';
const serif = '"Cormorant Garamond", ui-serif, Georgia, serif';
const sans = 'Manrope, -apple-system, BlinkMacSystemFont, sans-serif';

const kitText = {
  eyebrow: { fontFamily: sans, fontWeight: 500, fontSize: 16, lineHeight: '12px', letterSpacing: '0.05em', color: 'var(--color-accent-gold)', textTransform: 'uppercase', margin: 0 },
  h1: { fontFamily: serif, fontWeight: 600, fontSize: 48, lineHeight: '48px', color: 'var(--color-bg-parchment)', margin: 0 },
  h2: { fontFamily: serif, fontWeight: 600, fontSize: 36, lineHeight: '44px', color: 'var(--color-text-brand)', margin: 0 },
  h3: { fontFamily: serif, fontWeight: 600, fontSize: 28, lineHeight: '36px', color: 'var(--color-accent-gold)', margin: 0 },
  body: { fontFamily: sans, fontWeight: 400, fontSize: 16, lineHeight: '32px', color: 'var(--color-text-primary)', margin: 0 },
  meta: { fontFamily: sans, fontWeight: 700, fontSize: 11, lineHeight: '100%', color: 'var(--color-accent-gold)', margin: 0 },
};

function SiteHeader({ go, openCart }) {
  const onClick = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const t = (e.target.textContent || '').trim();
    if (x < 420 && !t) return go('home');
    if (x > 1180) return openCart();
    if (['Clothing', 'Shoes', 'Home & Living', 'Gifts', 'Seasonal'].includes(t)) go('collection');
  };
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 20, background: '#fff', borderBottom: '1px solid var(--color-border-subtle)' }}>
      <DT.AnnouncementBar />
      <div onClick={onClick} style={{ cursor: 'pointer' }}><DT.Header style={{ height: 80 }} /></div>
    </div>
  );
}

function SplitFeature({ image, title, body, cta, imageLeft, mirror, onCta }) {
  const img = <div style={{ width: 720, height: 600, flexShrink: 0, background: `url(${IMG + image}) center / cover no-repeat`, transform: mirror ? 'scaleX(-1)' : undefined }} />;
  const copy = (
    <div style={{ width: 720, height: 600, flexShrink: 0, background: 'var(--color-bg-parchment)', padding: 120, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h2 style={kitText.h2}>{title}</h2>
        <p style={kitText.body}>{body}</p>
      </div>
      <DT.Button size="standard" label={cta} style={{ width: 'auto', padding: '0 40px', alignSelf: 'flex-start' }} onClick={onCta} />
    </div>
  );
  return <div style={{ display: 'flex', width: 1440 }}>{imageLeft ? <>{img}{copy}</> : <>{copy}{img}</>}</div>;
}

function CartOverlay({ open, onClose }) {
  React.useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, pointerEvents: open ? 'auto' : 'none' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(41,38,36,0.32)', opacity: open ? 1 : 0, transition: 'opacity 240ms var(--ease-standard)' }} />
      <div onClick={(e) => { if (e.target.closest('svg') && e.clientY < 80) onClose(); }} style={{ position: 'absolute', top: 0, right: 0, height: '100vh', overflowY: 'auto', background: '#fff', boxShadow: 'var(--shadow-drawer)', transform: open ? 'none' : 'translateX(100%)', transition: 'transform 240ms var(--ease-standard)' }}>
        <DT.CartDrawer image={IMG + 'product-coat.png'} />
      </div>
    </div>
  );
}

Object.assign(window, { DT, IMG, serif, sans, kitText, SiteHeader, SplitFeature, CartOverlay });
