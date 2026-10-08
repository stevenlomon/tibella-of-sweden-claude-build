// Collections Page — node 324:3976
// Source grid repeats the default card (Alder ribbed knit coat) — product data is placeholder.
const shoeProducts = [0, 1, 2, 3];

function CollectionScreen({ go }) {
  const [sub, setSub] = React.useState('All shoes');
  const [page, setPage] = React.useState('1');
  const [filterOpen, setFilterOpen] = React.useState(false);
  return (
    <div data-screen-label="Collection">
      <div style={{ textAlign: 'center', paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h1 style={{ fontFamily: serif, fontWeight: 600, fontSize: 40, lineHeight: '44px', color: 'var(--color-text-primary)', margin: 0 }}>Shoes</h1>
        <p style={{ fontFamily: sans, fontSize: 14, lineHeight: '20px', color: 'var(--color-text-muted)', margin: 0 }}>Considered footwear for everyday comfort and polished style.</p>
      </div>
      <div onClick={() => setFilterOpen(true)} style={{ width: 1024, margin: '16px auto 0', cursor: 'pointer' }}><DT.CollectionToolbar style={{ width: 1024 }} /></div>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', margin: '16px 0 40px' }}>
        {['All shoes', 'Boots', 'Comfort & orthopedic', 'Wide-fit shoes'].map((s) => (
          <button key={s} onClick={() => setSub(s)} style={{ height: 36, padding: '8px 24px', border: 0, boxShadow: 'inset 0 0 0 1px rgb(216,216,215)', background: sub === s ? 'var(--color-action-primary)' : '#fff', color: sub === s ? 'var(--color-bg-parchment)' : 'var(--color-text-primary)', fontFamily: sans, fontWeight: 600, fontSize: 13, lineHeight: '18px', letterSpacing: '0.4px', cursor: 'pointer' }}>{s}</button>
        ))}
      </div>
      <div style={{ width: 1024, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
        {[0, 1, 2].map((r) => (
          <div key={r} style={{ display: 'flex', gap: 20 }}>
            {shoeProducts.map((k) => (
              <div key={k} onClick={() => go('product')} style={{ cursor: 'pointer' }}>
                <DT.ProductCard usage="grid" image={IMG + 'product-coat.png'} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ width: 1024, margin: '40px auto 0', display: 'flex', gap: 24, alignItems: 'center' }}>
        {['1', '2', '3', '…', 'Next'].map((p) => (
          <span key={p} onClick={() => p !== '…' && setPage(p === 'Next' ? String(Math.min(3, +page + 1)) : p)} style={{ fontFamily: sans, fontWeight: 600, fontSize: 13, lineHeight: '18px', letterSpacing: '0.4px', color: 'var(--color-text-brand)', cursor: 'pointer', textDecoration: page === p ? 'underline' : 'none', textUnderlineOffset: 4 }}>{p}</span>
        ))}
      </div>
      <div style={{ width: 1024, margin: '64px auto 0' }}><DT.TrustStrip /></div>
      <div style={{ width: 880, margin: '32px auto 64px' }}><DT.FAQSection /></div>
      {filterOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50 }}>
          <div onClick={() => setFilterOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(41,38,36,0.32)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, height: '100vh', overflowY: 'auto', background: '#fff' }}><DT.CollectionFilterSortDrawer /></div>
        </div>
      )}
    </div>
  );
}
window.CollectionScreen = CollectionScreen;
