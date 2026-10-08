// figma node: 426:2129 Announcement Bar (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "breakpoint=" + __venc(p.breakpoint);

export function AnnouncementBar(_p = {}) {
  const props = { ..._p, breakpoint: _p.breakpoint ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 40,
      backgroundColor: "var(--color-footer-background)",
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
        fontWeight: 700,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "0.050em",
        color: "var(--color-footer-text)",
        textTransform: "uppercase",
        flexShrink: 0,
      }}>{props.text1 ?? "FREE SHIPPING ON ALL US ORDERS"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 32,
      overflow: "hidden",
      backgroundColor: "var(--color-text-brand)",
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
        fontWeight: 700,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        letterSpacing: "0.800px",
        color: "var(--color-bg-surface)",
        textTransform: "uppercase",
        flexShrink: 0,
      }}>{props.text1 ?? "FREE SHIPPING ON ALL US ORDERS"}</span>
    </div>
  );
  const __impls = {
    // figma: Breakpoint=Desktop
    "breakpoint=desktop": __body0,
    // figma: Breakpoint=Mobile
    "breakpoint=mobile": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AnnouncementBar;
