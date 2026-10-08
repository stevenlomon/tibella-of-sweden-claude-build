// figma node: 430:2778 Collection Toolbar (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "breakpoint=" + __venc(p.breakpoint);

export function CollectionToolbar(_p = {}) {
  const props = { ..._p, breakpoint: _p.breakpoint ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1024,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--color-bg-surface)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={18.667} height={13.333} viewBox="0 0 18.667 13.333" fill="none" style={{
            position: "absolute",
            left: 2.667,
            top: 5.333,
            width: 18.667,
            height: 13.333,
          }}>
            <path d={"M 0 -0.625 L -0.625 -0.625 L -0.625 0.625 L 0 0.625 L 0 0 L 0 -0.625 Z M 18.667 0.625 L 19.292 0.625 L 19.292 -0.625 L 18.667 -0.625 L 18.667 0 L 18.667 0.625 Z M 2.667 6.042 L 2.042 6.042 L 2.042 7.292 L 2.667 7.292 L 2.667 6.667 L 2.667 6.042 Z M 16 7.292 L 16.625 7.292 L 16.625 6.042 L 16 6.042 L 16 6.667 L 16 7.292 Z M 6.667 12.708 L 6.042 12.708 L 6.042 13.958 L 6.667 13.958 L 6.667 13.333 L 6.667 12.708 Z M 12 13.958 L 12.625 13.958 L 12.625 12.708 L 12 12.708 L 12 13.333 L 12 13.958 Z M 0 0 L 0 0.625 L 18.667 0.625 L 18.667 0 L 18.667 -0.625 L 0 -0.625 L 0 0 Z M 2.667 6.667 L 2.667 7.292 L 16 7.292 L 16 6.667 L 16 6.042 L 2.667 6.042 L 2.667 6.667 Z M 6.667 13.333 L 6.667 13.958 L 12 13.958 L 12 13.333 L 12 12.708 L 6.667 12.708 L 6.667 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.400px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Filter & Sort"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "right",
        lineHeight: "16px",
        letterSpacing: "0.400px",
        color: "var(--color-text-muted)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "69 products"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--color-bg-surface)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={10} viewBox="0 0 14 10" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 4,
            width: 14,
            height: 10,
          }}>
            <path d={"M 0 -0.625 L -0.625 -0.625 L -0.625 0.625 L 0 0.625 L 0 0 L 0 -0.625 Z M 14 0.625 L 14.625 0.625 L 14.625 -0.625 L 14 -0.625 L 14 0 L 14 0.625 Z M 2 4.375 L 1.375 4.375 L 1.375 5.625 L 2 5.625 L 2 5 L 2 4.375 Z M 12 5.625 L 12.625 5.625 L 12.625 4.375 L 12 4.375 L 12 5 L 12 5.625 Z M 5 9.375 L 4.375 9.375 L 4.375 10.625 L 5 10.625 L 5 10 L 5 9.375 Z M 9 10.625 L 9.625 10.625 L 9.625 9.375 L 9 9.375 L 9 10 L 9 10.625 Z M 0 0 L 0 0.625 L 14 0.625 L 14 0 L 14 -0.625 L 0 -0.625 L 0 0 Z M 2 5 L 2 5.625 L 12 5.625 L 12 5 L 12 4.375 L 2 4.375 L 2 5 Z M 5 10 L 5 10.625 L 9 10.625 L 9 10 L 9 9.375 L 5 9.375 L 5 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.400px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Filter & Sort"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 9,
        textAlign: "right",
        lineHeight: "12px",
        letterSpacing: "0.800px",
        color: "var(--color-text-muted)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "69 products"}</span>
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
export default CollectionToolbar;
