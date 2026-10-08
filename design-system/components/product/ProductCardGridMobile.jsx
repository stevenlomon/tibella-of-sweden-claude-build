import { ProductSwatches } from './ProductSwatches.jsx';

// figma node: 382:796 Product Card/Grid/Mobile
export function ProductCardGridMobile(_p = {}) {
  const props = { ..._p, title: _p.title ?? "", price: _p.price ?? "", category: _p.category ?? "" };
  return (
    <div className={props.className} style={{
      width: 161,
      height: 310,
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
        height: 200,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        height: 110,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 8px 8px 8px",
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
          fontSize: 10,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "14px",
          letterSpacing: "0.800px",
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
          color: "var(--color-text-brand)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.price}</span>
        <ProductSwatches
          style={{ position: "relative", flexShrink: 0 }}
          size={"mobile"}
        />
      </div>
    </div>
  );
}
export default ProductCardGridMobile;
