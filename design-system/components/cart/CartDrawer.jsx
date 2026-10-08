import { Button } from '../actions/Button.jsx';
import { CartQuantitySelector } from '../actions/CartQuantitySelector.jsx';
import { TrustStrip } from '../trust/TrustStrip.jsx';

// figma node: 429:2324 Cart Drawer (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "breakpoint=" + __venc(p.breakpoint);

export function CartDrawer(_p = {}) {
  const props = { ..._p, breakpoint: _p.breakpoint ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 900,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(201,195,188,0.75)",
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
        height: 72,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 24px 0px 24px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
          fontWeight: 600,
          fontSize: 29,
          lineHeight: "32px",
          color: "rgb(35,66,56)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Your cart  ·  1 item"}</span>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 12,
            height: 12,
          }}>
            <path d={"M 0.495 -0.495 L 0 -0.99 L -0.99 0 L -0.495 0.495 L 0 0 L 0.495 -0.495 Z M 11.505 12.495 L 12 12.99 L 12.99 12 L 12.495 11.505 L 12 12 L 11.505 12.495 Z M 12.495 0.495 L 12.99 0 L 12 -0.99 L 11.505 -0.495 L 12 0 L 12.495 0.495 Z M -0.495 11.505 L -0.99 12 L 0 12.99 L 0.495 12.495 L 0 12 L -0.495 11.505 Z M 0 0 L -0.495 0.495 L 11.505 12.495 L 12 12 L 12.495 11.505 L 0.495 -0.495 L 0 0 Z M 12 0 L 11.505 -0.495 L -0.495 11.505 L 0 12 L 0.495 12.495 L 12.495 0.495 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 44,
        backgroundColor: "rgb(247,242,233)",
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
          fontWeight: 700,
          fontSize: 10,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(35,66,56)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "FREE SHIPPING ON ALL US ORDERS"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 578,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "24px 24px 24px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 154,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div className={props.image ? undefined : "fig-asset-b74394ca95812264"} style={{
        ...(props.image ? { background: `url(${props.image}) center / cover no-repeat` } : {}),
            position: "relative",
            width: 104,
            height: 140,
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 272,
            height: 140,
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
              fontWeight: 600,
              fontSize: 17,
              lineHeight: "20px",
              color: "rgb(41,38,36)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "Alder ribbed knit coat with denim panels"}</span>
            <span style={{
              position: "relative",
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 11,
              lineHeight: "16px",
              color: "rgb(41,38,36)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text4 ?? "Cream  /  M"}</span>
            <span style={{
              position: "relative",
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              lineHeight: "100%",
              color: "rgb(35,66,56)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>$68.00</span>
            <div style={{
              position: "relative",
              height: 36,
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <CartQuantitySelector style={{
                  position: "relative",
                  width: 108,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }} />
              <span style={{
                position: "relative",
                width: 152,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 9,
                textAlign: "right",
                lineHeight: "100%",
                color: "rgb(106,52,70)",
                flexShrink: 0,
              }}>REMOVE</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "rgba(201,195,188,0.72)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        height: 212,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgba(201,195,188,0.7)",
        borderRight: "1px solid rgba(201,195,188,0.7)",
        borderBottom: "1px solid rgba(201,195,188,0.7)",
        borderLeft: "1px solid rgba(201,195,188,0.7)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "20px 24px 20px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 32,
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
            width: 292,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(41,38,36)",
            flexShrink: 0,
          }}>Subtotal</span>
          <span style={{
            position: "relative",
            width: 92,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(35,66,56)",
            flexShrink: 0,
          }}>$68.00</span>
        </div>
        <Button
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"CHECKOUT"}
          style2={"primary"}
          size={"standard"}
        />
        <TrustStrip
          style={{
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          context={"checkout"}
          breakpoint={"desktop"}
        />
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "0.600px",
          color: "rgb(35,66,56)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>PAYMENTS ARE ENCRYPTED AND PROCESSED SECURELY</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 844,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(201,195,188,0.75)",
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
        height: 72,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 20px 0px 20px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
          fontWeight: 600,
          fontSize: 29,
          lineHeight: "32px",
          color: "rgb(35,66,56)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Your cart  ·  1 item"}</span>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 12,
            height: 12,
          }}>
            <path d={"M 0.495 -0.495 L 0 -0.99 L -0.99 0 L -0.495 0.495 L 0 0 L 0.495 -0.495 Z M 11.505 12.495 L 12 12.99 L 12.99 12 L 12.495 11.505 L 12 12 L 11.505 12.495 Z M 12.495 0.495 L 12.99 0 L 12 -0.99 L 11.505 -0.495 L 12 0 L 12.495 0.495 Z M -0.495 11.505 L -0.99 12 L 0 12.99 L 0.495 12.495 L 0 12 L -0.495 11.505 Z M 0 0 L -0.495 0.495 L 11.505 12.495 L 12 12 L 12.495 11.505 L 0.495 -0.495 L 0 0 Z M 12 0 L 11.505 -0.495 L -0.495 11.505 L 0 12 L 0.495 12.495 L 12.495 0.495 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 44,
        backgroundColor: "rgb(247,242,233)",
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
          fontWeight: 700,
          fontSize: 10,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(35,66,56)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "FREE SHIPPING ON ALL US ORDERS"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 530,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "20px 20px 20px 20px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 154,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div className={props.image ? undefined : "fig-asset-b74394ca95812264"} style={{
        ...(props.image ? { background: `url(${props.image}) center / cover no-repeat` } : {}),
            position: "relative",
            width: 92,
            height: 140,
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 242,
            height: 140,
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
              fontWeight: 600,
              fontSize: 17,
              lineHeight: "20px",
              color: "rgb(41,38,36)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "Alder ribbed knit coat with denim panels"}</span>
            <span style={{
              position: "relative",
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 11,
              lineHeight: "16px",
              color: "rgb(41,38,36)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text4 ?? "Cream  /  M"}</span>
            <span style={{
              position: "relative",
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              lineHeight: "100%",
              color: "rgb(35,66,56)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>$68.00</span>
            <div style={{
              position: "relative",
              height: 36,
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <CartQuantitySelector style={{
                  position: "relative",
                  width: 108,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }} />
              <span style={{
                position: "relative",
                width: 122,
                fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 9,
                textAlign: "right",
                lineHeight: "100%",
                color: "rgb(106,52,70)",
                flexShrink: 0,
              }}>REMOVE</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "rgba(201,195,188,0.72)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        height: 210,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgba(201,195,188,0.7)",
        borderRight: "1px solid rgba(201,195,188,0.7)",
        borderBottom: "1px solid rgba(201,195,188,0.7)",
        borderLeft: "1px solid rgba(201,195,188,0.7)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "20px 20px 20px 20px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 32,
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
            width: 250,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(41,38,36)",
            flexShrink: 0,
          }}>Subtotal</span>
          <span style={{
            position: "relative",
            width: 92,
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(35,66,56)",
            flexShrink: 0,
          }}>$68.00</span>
        </div>
        <Button
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"CHECKOUT"}
          style2={"primary"}
          size={"standard"}
        />
        <TrustStrip
          style={{
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          context={"checkout"}
          breakpoint={"mobile"}
        />
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          textAlign: "center",
          lineHeight: "14px",
          letterSpacing: "0.600px",
          color: "rgb(35,66,56)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>PAYMENTS ARE ENCRYPTED AND PROCESSED SECURELY</span>
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
export default CartDrawer;
