// figma node: 239:17 Accordion / FAQ (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "breakpoint=" + __venc(p.breakpoint) + '|' + "state=" + __venc(p.state);

export function AccordionFAQ(_p = {}) {
  const props = { ..._p, breakpoint: _p.breakpoint ?? "desktop", state: _p.state ?? "closed" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 880,
      borderBottom: "1px solid rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-16) * 1px)",
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-24) * 1px)",
      paddingBottom: "calc(var(--spacing-24) * 1px)",
      position: "relative",
      color: "rgb(106,52,70)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 17,
          lineHeight: "26px",
          color: "rgb(35,66,56)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "When will my order arrive?"}</span>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 14,
            height: 14,
          }}>
            <path d={"M 7.75 0 L 7.75 -0.75 L 6.25 -0.75 L 6.25 0 L 7 0 L 7.75 0 Z M 6.25 14 L 6.25 14.75 L 7.75 14.75 L 7.75 14 L 7 14 L 6.25 14 Z M 0 6.25 L -0.75 6.25 L -0.75 7.75 L 0 7.75 L 0 7 L 0 6.25 Z M 14 7.75 L 14.75 7.75 L 14.75 6.25 L 14 6.25 L 14 7 L 14 7.75 Z M 7 0 L 6.25 0 L 6.25 14 L 7 14 L 7.75 14 L 7.75 0 L 7 0 Z M 0 7 L 0 7.75 L 14 7.75 L 14 7 L 14 6.25 L 0 6.25 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 880,
      borderBottom: "1px solid rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-16) * 1px)",
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-24) * 1px)",
      paddingBottom: "calc(var(--spacing-24) * 1px)",
      position: "relative",
      color: "rgb(106,52,70)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 17,
          lineHeight: "26px",
          color: "rgb(35,66,56)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "When will my order arrive?"}</span>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={1.500} viewBox="0 -0.750 14 1.500" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 10,
            width: 14,
            height: 1.5,
          }}>
            <path d={"M 0 -0.75 L -0.75 -0.75 L -0.75 0.75 L 0 0.75 L 0 0 L 0 -0.75 Z M 14 0.75 L 14.75 0.75 L 14.75 -0.75 L 14 -0.75 L 14 0 L 14 0.75 Z M 0 0 L 0 0.75 L 14 0.75 L 14 0 L 14 -0.75 L 0 -0.75 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <span style={{
        position: "relative",
        width: 820,
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        lineHeight: "26px",
        color: "rgb(41,38,36)",
        flexShrink: 0,
      }}>{props.text2 ?? "Orders are processed within 1–2 business days. Delivery estimates are shown at checkout and included in your confirmation email. Once your order ships, we’ll send a tracking link so you can follow it every step of the way."}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 342,
      height: 54,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
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
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "0.400px",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text1 ?? "Do you offer free shipping?"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-action-primary)",
        flexShrink: 0,
      }}>{props.text2 ?? "+"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 342,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          letterSpacing: "0.400px",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "When will my order arrive?"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text2 ?? "−"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "19px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "Delivery estimates are shown at checkout and included in your confirmation email."}</span>
    </div>
  );
  const __impls = {
    // figma: Breakpoint=Desktop, State=Closed
    "breakpoint=desktop|state=closed": __body0,
    // figma: Breakpoint=Desktop, State=Open
    "breakpoint=desktop|state=open": __body1,
    // figma: Breakpoint=Mobile, State=Closed
    "breakpoint=mobile|state=closed": __body2,
    // figma: Breakpoint=Mobile, State=Open
    "breakpoint=mobile|state=open": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AccordionFAQ;
