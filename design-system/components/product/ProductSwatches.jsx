// figma node: 430:2342 Product Swatches (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function ProductSwatches(_p = {}) {
  const props = { ..._p, size: _p.size ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        backgroundColor: "rgb(227,214,191)",
        boxShadow: "inset 0 0 0 2px var(--color-footer-background)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 20,
        backgroundColor: "rgb(94,43,56)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 20,
        backgroundColor: "rgb(36,66,54)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 20,
        backgroundColor: "rgb(41,38,36)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        backgroundColor: "rgb(227,214,191)",
        boxShadow: "inset 0 0 0 2px var(--color-footer-background)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 16,
        backgroundColor: "rgb(94,43,56)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 16,
        backgroundColor: "rgb(36,66,54)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 16,
        backgroundColor: "rgb(41,38,36)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 152,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-8) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 32,
        backgroundColor: "rgb(227,214,191)",
        boxShadow: "inset 0 0 0 2px var(--color-footer-background)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 32,
        backgroundColor: "rgb(94,43,56)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 32,
        backgroundColor: "rgb(36,66,54)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        width: 32,
        backgroundColor: "rgb(41,38,36)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __impls = {
    // figma: Size=Desktop
    "size=desktop": __body0,
    // figma: Size=Mobile
    "size=mobile": __body1,
    // figma: Size=PDP
    "size=pdp": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ProductSwatches;
