// Product Display Page / Desktop / Premium — node 330:1337
const pdpLabel = { fontFamily: sans, fontWeight: 700, fontSize: 12, lineHeight: '100%', color: 'var(--color-text-primary)', margin: 0 };

function ProductScreen({ go, addToCart }) {
  const [size, setSize] = React.useState('M');
  const [qty, setQty] = React.useState(1);
  const [slide, setSlide] = React.useState(0);
  const [open, setOpen] = React.useState(-1);
  const coat = IMG + 'product-coat.png';
  return (
    <div data-screen-label="Product">
      <section style={{ display: 'flex', gap: 32, padding: '40px 208px 64px', boxSizing: 'border-box' }}>
        <div style={{ width: 608, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', gap: 16, height: 520 }}>
            <div style={{ width: 296, background: `url(${coat}) center / cover` }} />
            <div style={{ width: 296, background: `url(${coat}) center / cover` }} />
          </div>
          <div style={{ height: 560, overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 16, transform: `translateX(${-slide * 624}px)`, transition: 'transform 320ms var(--ease-standard)' }}>
              {[0, 1, 2].map((k) => <div key={k} style={{ width: 608, height: 560, flexShrink: 0, background: `url(${coat}) center / cover` }} />)}
            </div>
          </div>
          <div style={{ height: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 11, lineHeight: '16px', letterSpacing: '0.4px' }}>{slide + 3} / 5</span>
            <div style={{ width: 392, height: 2, background: 'rgb(219,214,204)', position: 'relative' }}><div style={{ position: 'absolute', left: 0, top: 0, height: 2, width: `${((slide + 3) / 5) * 100}%`, background: 'var(--color-action-primary-hover)', transition: 'width 320ms' }} /></div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setSlide((s) => Math.max(0, s - 1))} style={{ border: 0, background: 'none', cursor: 'pointer', fontSize: 16, color: 'var(--color-text-primary)' }}>←</button>
              <button onClick={() => setSlide((s) => Math.min(2, s + 1))} style={{ border: 0, background: 'none', cursor: 'pointer', fontSize: 16, color: 'var(--color-text-primary)' }}>→</button>
            </div>
          </div>
        </div>
        <div style={{ width: 384, display: 'flex', flexDirection: 'column', gap: 20, position: 'sticky', top: 140, alignSelf: 'flex-start' }}>
          <p style={kitText.meta}>OUTERWEAR</p>
          <h1 style={{ fontFamily: serif, fontWeight: 600, fontSize: 32, lineHeight: '38px', color: 'var(--color-text-brand)', margin: 0 }}>Alder ribbed knit coat with denim panels</h1>
          <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 17, lineHeight: '24px', color: 'var(--color-text-primary)', margin: 0 }}>$68.00</p>
          <div style={{ height: 1, background: 'var(--color-border-subtle)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><p style={pdpLabel}>COLOR  ·  CREAM</p><DT.ProductSwatches size="pdp" /></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><p style={pdpLabel}>SIZE</p><a style={{ fontFamily: sans, fontWeight: 700, fontSize: 11 }}>SIZE GUIDE</a></div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['S', 'M', 'L', 'XL', '2XL'].map((s) => (
              <button key={s} onClick={() => setSize(s)} style={{ width: 56, height: 44, border: 0, cursor: 'pointer', background: size === s ? 'var(--color-text-brand)' : '#fff', color: size === s ? '#fff' : 'var(--color-text-primary)', boxShadow: `inset 0 0 0 1px ${size === s ? 'var(--color-text-brand)' : 'var(--color-border-subtle)'}`, fontFamily: sans, fontWeight: 700, fontSize: 12 }}>{s}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, height: 52 }}>
            <div style={{ width: 108, boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', boxSizing: 'border-box', fontFamily: sans, fontWeight: 600, fontSize: 14 }}>
              <span style={{ cursor: 'pointer' }} onClick={() => setQty((q) => Math.max(1, q - 1))}>−</span><span>{qty}</span><span style={{ cursor: 'pointer' }} onClick={() => setQty((q) => q + 1)}>+</span>
            </div>
            <DT.Button label="ADD TO CART" style={{ width: 264, height: 52 }} onClick={addToCart} />
          </div>
          <DT.TrustStrip context="purchase" style={{ width: 384 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '8px 0' }}>
            <p style={kitText.meta}>WHY YOU’LL LOVE IT</p>
            <p style={{ fontFamily: sans, fontSize: 14, lineHeight: '22px', margin: 0 }}>A softly structured knit coat designed for easy layering, with contrasting denim panels that give an everyday silhouette a more considered finish.</p>
            <p style={kitText.meta}>KEY FEATURES</p>
            <p style={{ fontFamily: sans, fontSize: 14, lineHeight: '22px', margin: 0, whiteSpace: 'pre-line' }}>{'• Ribbed knit with comfortable movement\n• Contrasting denim front and collar panels\n• Full-length sleeves and practical patch pockets\n• Easy shape for workdays, weekends and travel'}</p>
          </div>
          <div>
            {['FIT & SIZING', 'FABRIC & CARE', 'SHIPPING & RETURNS', 'REVIEWS'].map((l, k) => (
              <div key={l} onClick={() => setOpen(open === k ? -1 : k)} style={{ cursor: 'pointer' }}>
                <DT.AccordionProductDetails label={l} text1={open === k ? '−' : '+'} style={{ width: 384 }} />
                {open === k && <p style={{ fontFamily: sans, fontSize: 14, lineHeight: '22px', color: 'var(--color-text-muted)', margin: '0 0 16px' }}>Content for this panel is not designed in the source file.</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ display: 'flex', height: 480, background: 'var(--color-bg-parchment)' }}>
        <div style={{ width: 720, padding: '0 80px 0 120px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
          <p style={kitText.meta}>WHY YOU’LL LOVE IT</p>
          <h2 style={kitText.h2}>The layer that does not feel like an afterthought.</h2>
          <p style={{ ...kitText.body, lineHeight: '26px' }}>Warm enough to earn its place by the door, distinctive enough to finish the whole outfit. The relaxed shape works over knits without losing its line.</p>
        </div>
        <div style={{ width: 720, background: `url(${coat}) center / cover` }} />
      </section>
      <section style={{ padding: '64px 208px', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><p style={{ ...kitText.meta, fontSize: 12, lineHeight: '16px' }}>OUTERWEAR</p><h2 style={{ ...kitText.h2, fontSize: 32, lineHeight: '100%' }}>You may also like</h2></div>
          <DT.CarouselControls size="desktop" />
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {[0, 1, 2, 3].map((k) => <div key={k} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}><DT.ProductCard usage="grid" image={coat} /></div>)}
        </div>
      </section>
      <div style={{ width: 880, margin: '0 auto 64px' }}><DT.FAQSection /></div>
    </div>
  );
}
window.ProductScreen = ProductScreen;
