import { Button } from '../actions/Button.jsx';
import { ProductCardCollectionFilterSort } from './ProductCardCollectionFilterSort.jsx';

// figma node: 429:2325 Collection / Filter & Sort Drawer (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "breakpoint=" + __venc(p.breakpoint);

export function CollectionFilterSortDrawer(_p = {}) {
  const props = { ..._p, breakpoint: _p.breakpoint ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 968,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 96,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        padding: "20px 24px 16px 24px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(35,66,56)",
            flexShrink: 0,
          }}>{props.text1 ?? "Filter & Sort"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(117,112,108)",
            flexShrink: 0,
          }}>{props.text2 ?? "Shoes · 69 Products"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 14,
            height: 14,
          }}>
            <path d={"M 0.636 -0.636 L 0 -1.273 L -1.273 0 L -0.636 0.636 L 0 0 L 0.636 -0.636 Z M 13.364 14.636 L 14 15.273 L 15.273 14 L 14.636 13.364 L 14 14 L 13.364 14.636 Z M 14.636 0.636 L 15.273 0 L 14 -1.273 L 13.364 -0.636 L 14 0 L 14.636 0.636 Z M -0.636 13.364 L -1.273 14 L 0 15.273 L 0.636 14.636 L 0 14 L -0.636 13.364 Z M 0 0 L -0.636 0.636 L 13.364 14.636 L 14 14 L 14.636 13.364 L 0.636 -0.636 L 0 0 Z M 14 0 L 13.364 -0.636 L -0.636 13.364 L 0 14 L 0.636 14.636 L 14.636 0.636 L 14 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 768,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(201,195,188)",
        borderRight: "1px solid rgb(201,195,188)",
        borderBottom: "1px solid rgb(201,195,188)",
        borderLeft: "1px solid rgb(201,195,188)",
        display: "flex",
        flexDirection: "column",
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ProductCardCollectionFilterSort style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
      </div>
      <div style={{
        position: "relative",
        height: 104,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "20px 24px 20px 24px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Button
          style={{
            position: "relative",
            width: 190,
            height: 48,
            flexShrink: 0,
          }}
          style2={"secondary"}
          size={"standard"}
        />
        <Button
          style={{
            position: "relative",
            width: 188,
            height: 48,
            flexShrink: 0,
          }}
          text1={"Show Products"}
          style2={"primary"}
          size={"standard"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 844,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 96,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        padding: "20px 24px 16px 24px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(35,66,56)",
            flexShrink: 0,
          }}>{props.text1 ?? "Filter & Sort"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(117,112,108)",
            flexShrink: 0,
          }}>{props.text2 ?? "Shoes · 69 Products"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 14,
            height: 14,
          }}>
            <path d={"M 0.636 -0.636 L 0 -1.273 L -1.273 0 L -0.636 0.636 L 0 0 L 0.636 -0.636 Z M 13.364 14.636 L 14 15.273 L 15.273 14 L 14.636 13.364 L 14 14 L 13.364 14.636 Z M 14.636 0.636 L 15.273 0 L 14 -1.273 L 13.364 -0.636 L 14 0 L 14.636 0.636 Z M -0.636 13.364 L -1.273 14 L 0 15.273 L 0.636 14.636 L 0 14 L -0.636 13.364 Z M 0 0 L -0.636 0.636 L 13.364 14.636 L 14 14 L 14.636 13.364 L 0.636 -0.636 L 0 0 Z M 14 0 L 13.364 -0.636 L -0.636 13.364 L 0 14 L 0.636 14.636 L 14.636 0.636 L 14 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 644,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(201,195,188)",
        borderRight: "1px solid rgb(201,195,188)",
        borderBottom: "1px solid rgb(201,195,188)",
        borderLeft: "1px solid rgb(201,195,188)",
        display: "flex",
        flexDirection: "column",
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ProductCardCollectionFilterSort style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
      </div>
      <div style={{
        position: "relative",
        height: 104,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "20px 24px 20px 24px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Button
          style={{
            position: "relative",
            width: 165,
            height: 48,
            flexShrink: 0,
          }}
          style2={"secondary"}
          size={"standard"}
        />
        <Button
          style={{
            position: "relative",
            width: 163,
            height: 48,
            flexShrink: 0,
          }}
          text1={"Show Products"}
          style2={"primary"}
          size={"standard"}
        />
      </div>
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
export default CollectionFilterSortDrawer;
