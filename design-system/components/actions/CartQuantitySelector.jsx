// figma node: 276:1063 Cart / Quantity Selector
export function CartQuantitySelector(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 108,
      height: 36,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 35,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(41,38,36)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "−"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 36,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(41,38,36)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "1"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 35,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(41,38,36)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "+"}</span>
      </div>
    </div>
  );
}
export default CartQuantitySelector;
