// figma node: 427:2208 Button (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "size=" + __venc(p.size);

export function Button(_p = {}) {
  const props = { ..._p, label: _p.label ?? "ADD TO CART", style2: _p.style2 ?? "primary", size: _p.size ?? "lg" };
  const __body0 = () => (
    <div className={props.className} data-dt-btn="primary" role="button" tabIndex={0} onClick={props.onClick} style={{
      cursor: props.disabled ? "not-allowed" : "pointer",
      opacity: props.disabled ? 0.45 : 1,
      width: 320,
      height: 52,
      backgroundColor: "var(--color-action-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 24px 16px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-24) * 1px)",
      paddingTop: "calc(var(--spacing-16) * 1px)",
      paddingRight: "calc(var(--spacing-24) * 1px)",
      paddingBottom: "calc(var(--spacing-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "0.400px",
        color: "var(--color-bg-surface)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} data-dt-btn="primary" role="button" tabIndex={0} onClick={props.onClick} style={{
      cursor: props.disabled ? "not-allowed" : "pointer",
      opacity: props.disabled ? 0.45 : 1,
      width: 240,
      height: 48,
      backgroundColor: "rgb(106,52,70)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        textAlign: "center",
        lineHeight: "18px",
        letterSpacing: "0.400px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{_p.label ?? props.text1 ?? "SHOP NOW"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} data-dt-btn="secondary" role="button" tabIndex={0} onClick={props.onClick} style={{
      cursor: props.disabled ? "not-allowed" : "pointer",
      opacity: props.disabled ? 0.45 : 1,
      width: 190,
      height: 48,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "0.400px",
        color: "rgb(41,38,36)",
        flexShrink: 0,
      }}>{_p.label ?? props.text1 ?? "Clear All"}</span>
    </div>
  );
  const __impls = {
    // figma: Style=Primary, Size=Large
    "style2=primary|size=lg": __body0,
    // figma: Style=Primary, Size=Standard
    "style2=primary|size=standard": __body1,
    // figma: Style=Secondary, Size=Standard
    "style2=secondary|size=standard": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Button;
