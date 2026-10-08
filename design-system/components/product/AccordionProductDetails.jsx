// figma node: 247:108 Accordion / Product Details
export function AccordionProductDetails(_p = {}) {
  const props = { ..._p, label: _p.label ?? "FIT & SIZING" };
  return (
    <div className={props.className} style={{
      width: 534,
      height: 54,
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
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-action-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "+"}</span>
    </div>
  );
}
export default AccordionProductDetails;
