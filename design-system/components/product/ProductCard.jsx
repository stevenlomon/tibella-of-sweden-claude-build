import { ProductSwatches } from './ProductSwatches.jsx';

// figma node: 382:802 Product Card (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "usage=" + __venc(p.usage) + '|' + "breakpoint=" + __venc(p.breakpoint);

export function ProductCard(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Alder ribbed knit coat", usage: _p.usage ?? "editorial", price: _p.price ?? "$68.00", breakpoint: _p.breakpoint ?? "desktop", category: _p.category ?? "OUTERWEAR" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 291,
      height: 504,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className={props.image ? undefined : "fig-asset-b74394ca95812264"} style={{
        ...(props.image ? { background: `url(${props.image}) center / cover no-repeat` } : {}),
        position: "relative",
        height: 380,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        height: 124,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          letterSpacing: "0.100em",
          color: "var(--color-accent-gold)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.category}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.400px",
          color: "var(--color-text-brand)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.price}</span>
        <ProductSwatches
          style={{ position: "relative", flexShrink: 0 }}
          size={"desktop"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 241,
      height: 439,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className={props.image ? undefined : "fig-asset-b74394ca95812264"} style={{
        ...(props.image ? { background: `url(${props.image}) center / cover no-repeat` } : {}),
        position: "relative",
        height: 315,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        height: 124,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 0px 8px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          letterSpacing: "0.100em",
          color: "var(--color-accent-gold)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{_p.category ?? props.text1 ?? "OUTERWEAR"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{_p.title ?? props.text2 ?? "Alder ribbed knit coat"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.400px",
          color: "var(--color-text-brand)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{_p.price ?? props.text3 ?? "$68.00"}</span>
        <ProductSwatches
          style={{ position: "relative", flexShrink: 0 }}
          size={"desktop"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Usage=Editorial, Breakpoint=Desktop
    "usage=editorial|breakpoint=desktop": __body0,
    // figma: Usage=Grid, Breakpoint=Desktop
    "usage=grid|breakpoint=desktop": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ProductCard;
