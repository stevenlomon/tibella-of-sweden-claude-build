import { IconTrust30DayReturns } from './IconTrust30DayReturns.jsx';
import { IconTrustFreeShipping } from './IconTrustFreeShipping.jsx';
import { IconTrustHelpfulSupport } from './IconTrustHelpfulSupport.jsx';
import { IconTrustSecureCheckout } from './IconTrustSecureCheckout.jsx';
import { TrustItemPurchase } from './TrustItemPurchase.jsx';

// figma node: 426:1731 Trust Strip (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "context=" + __venc(p.context) + '|' + "breakpoint=" + __venc(p.breakpoint);

export function TrustStrip(_p = {}) {
  const props = { ..._p, context: _p.context ?? "page", breakpoint: _p.breakpoint ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1024,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-8) * 1px)",
        padding: "16px 16px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--spacing-16) * 1px)",
        paddingBottom: "calc(var(--spacing-16) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconTrustFreeShipping />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.text1 ?? "FREE SHIPPING"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(41,38,36,0.72)",
          flexShrink: 0,
        }}>{props.text2 ?? "On every US order"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 120,
        backgroundColor: "rgb(201,195,188)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-8) * 1px)",
        padding: "16px 16px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--spacing-16) * 1px)",
        paddingBottom: "calc(var(--spacing-16) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon2 ?? <IconTrust30DayReturns />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.text3 ?? "30-DAY RETURNS"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(41,38,36,0.72)",
          flexShrink: 0,
        }}>{props.text4 ?? "Shop with confidence"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 120,
        backgroundColor: "rgb(201,195,188)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-8) * 1px)",
        padding: "16px 16px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--spacing-16) * 1px)",
        paddingBottom: "calc(var(--spacing-16) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon3 ?? <IconTrustSecureCheckout />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>SECURE CHECKOUT</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(41,38,36,0.72)",
          flexShrink: 0,
        }}>Your payment is protected</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 120,
        backgroundColor: "rgb(201,195,188)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-8) * 1px)",
        padding: "16px 16px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--spacing-16) * 1px)",
        paddingBottom: "calc(var(--spacing-16) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon4 ?? <IconTrustHelpfulSupport />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>HELPFUL SUPPORT</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgba(41,38,36,0.72)",
          flexShrink: 0,
        }}>Here when you need us</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 384,
      height: 176,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-parchment)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TrustItemPurchase
        style={{
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"free shipping"}
      />
      <TrustItemPurchase
        style={{
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"30-day returns"}
      />
      <TrustItemPurchase
        style={{
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"secure checkout"}
      />
      <TrustItemPurchase
        style={{
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"helpful support"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 392,
      height: 52,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(217,211,203,0.8)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(35,66,56)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 4px 8px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
            position: "absolute",
            left: 1.167,
            top: 3.033,
            width: 7,
            height: 7,
          }}>
            <path d={"M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 7 0 L 7.55 0 L 7.55 -0.55 L 7 -0.55 L 7 0 Z M 7 7 L 7 7.55 L 7.55 7.55 L 7.55 7 L 7 7 Z M 0 7 L -0.55 7 L -0.55 7.55 L 0 7.55 L 0 7 Z M 0 0 L 0 0.55 L 7 0.55 L 7 0 L 7 -0.55 L 0 -0.55 L 0 0 Z M 7 0 L 6.45 0 L 6.45 7 L 7 7 L 7.55 7 L 7.55 0 L 7 0 Z M 7 7 L 7 6.45 L 0 6.45 L 0 7 L 0 7.55 L 7 7.55 L 7 7 Z M 0 7 L 0.55 7 L 0.55 0 L 0 0 L -0.55 0 L -0.55 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={4.667} height={5.133} viewBox="0 0 4.667 5.133" fill="none" style={{
            position: "absolute",
            left: 8.167,
            top: 4.9,
            width: 4.667,
            height: 5.133,
          }}>
            <path d={"M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 2.1 0 L 2.489 -0.389 L 2.328 -0.55 L 2.1 -0.55 L 2.1 0 Z M 4.667 2.567 L 5.217 2.567 L 5.217 2.339 L 5.056 2.178 L 4.667 2.567 Z M 4.667 5.133 L 4.667 5.683 L 5.217 5.683 L 5.217 5.133 L 4.667 5.133 Z M 0 5.133 L -0.55 5.133 L -0.55 5.683 L 0 5.683 L 0 5.133 Z M 0 0 L 0 0.55 L 2.1 0.55 L 2.1 0 L 2.1 -0.55 L 0 -0.55 L 0 0 Z M 2.1 0 L 1.711 0.389 L 4.278 2.956 L 4.667 2.567 L 5.056 2.178 L 2.489 -0.389 L 2.1 0 Z M 4.667 2.567 L 4.117 2.567 L 4.117 5.133 L 4.667 5.133 L 5.217 5.133 L 5.217 2.567 L 4.667 2.567 Z M 4.667 5.133 L 4.667 4.583 L 0 4.583 L 0 5.133 L 0 5.683 L 4.667 5.683 L 4.667 5.133 Z M 0 5.133 L 0.55 5.133 L 0.55 0 L 0 0 L -0.55 0 L -0.55 5.133 L 0 5.133 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={1.867} height={1.867} viewBox="0 0 1.867 1.867" fill="none" style={{
            position: "absolute",
            left: 2.567,
            top: 10.033,
            width: 1.867,
            height: 1.867,
          }}>
            <path d={"M 1.867 0.933 L 1.317 0.933 C 1.317 1.145 1.145 1.317 0.933 1.317 L 0.933 1.867 L 0.933 2.417 C 1.753 2.417 2.417 1.753 2.417 0.933 L 1.867 0.933 Z M 0.933 1.867 L 0.933 1.317 C 0.722 1.317 0.55 1.145 0.55 0.933 L 0 0.933 L -0.55 0.933 C -0.55 1.753 0.114 2.417 0.933 2.417 L 0.933 1.867 Z M 0 0.933 L 0.55 0.933 C 0.55 0.722 0.722 0.55 0.933 0.55 L 0.933 0 L 0.933 -0.55 C 0.114 -0.55 -0.55 0.114 -0.55 0.933 L 0 0.933 Z M 0.933 0 L 0.933 0.55 C 1.145 0.55 1.317 0.722 1.317 0.933 L 1.867 0.933 L 2.417 0.933 C 2.417 0.114 1.753 -0.55 0.933 -0.55 L 0.933 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={1.867} height={1.867} viewBox="0 0 1.867 1.867" fill="none" style={{
            position: "absolute",
            left: 9.8,
            top: 10.033,
            width: 1.867,
            height: 1.867,
          }}>
            <path d={"M 1.867 0.933 L 1.317 0.933 C 1.317 1.145 1.145 1.317 0.933 1.317 L 0.933 1.867 L 0.933 2.417 C 1.753 2.417 2.417 1.753 2.417 0.933 L 1.867 0.933 Z M 0.933 1.867 L 0.933 1.317 C 0.722 1.317 0.55 1.145 0.55 0.933 L 0 0.933 L -0.55 0.933 C -0.55 1.753 0.114 2.417 0.933 2.417 L 0.933 1.867 Z M 0 0.933 L 0.55 0.933 C 0.55 0.722 0.722 0.55 0.933 0.55 L 0.933 0 L 0.933 -0.55 C 0.114 -0.55 -0.55 0.114 -0.55 0.933 L 0 0.933 Z M 0.933 0 L 0.933 0.55 C 1.145 0.55 1.317 0.722 1.317 0.933 L 1.867 0.933 L 2.417 0.933 C 2.417 0.114 1.753 -0.55 0.933 -0.55 L 0.933 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "FREE SHIPPING"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 24,
        backgroundColor: "rgba(217,211,203,0.9)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 4px 8px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={8.867} height={6.533} viewBox="0 0 8.867 6.533" fill="none" style={{
            position: "absolute",
            left: 3.967,
            top: 3.967,
            width: 8.867,
            height: 6.533,
          }}>
            <path d={"M 0 0 L 0 0.55 L 5.6 0.55 L 5.6 0 L 5.6 -0.55 L 0 -0.55 L 0 0 Z M 5.6 0 L 5.6 0.55 C 7.1 0.55 8.317 1.766 8.317 3.267 L 8.867 3.267 L 9.417 3.267 C 9.417 1.159 7.708 -0.55 5.6 -0.55 L 5.6 0 Z M 8.867 3.267 L 8.317 3.267 C 8.317 4.767 7.1 5.983 5.6 5.983 L 5.6 6.533 L 5.6 7.083 C 7.708 7.083 9.417 5.375 9.417 3.267 L 8.867 3.267 Z M 5.6 6.533 L 5.6 5.983 L 0.933 5.983 L 0.933 6.533 L 0.933 7.083 L 5.6 7.083 L 5.6 6.533 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={2.333} height={4.667} viewBox="0 0 2.333 4.667" fill="none" style={{
            position: "absolute",
            left: 2.567,
            top: 1.633,
            width: 2.333,
            height: 4.667,
          }}>
            <path d={"M 0 2.333 L -0.389 1.944 L -0.778 2.333 L -0.389 2.722 L 0 2.333 Z M 2.333 0 L 1.944 -0.389 L -0.389 1.944 L 0 2.333 L 0.389 2.722 L 2.722 0.389 L 2.333 0 Z M 0 2.333 L -0.389 2.722 L 1.944 5.056 L 2.333 4.667 L 2.722 4.278 L 0.389 1.944 L 0 2.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={2.800} height={1.100} viewBox="0 -0.550 2.800 1.100" fill="none" style={{
            position: "absolute",
            left: 2.567,
            top: 3.967,
            width: 2.8,
            height: 1.100000023841858,
          }}>
            <path d={"M 0 0 L 0 0.55 L 2.8 0.55 L 2.8 0 L 2.8 -0.55 L 0 -0.55 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "30-DAY RETURNS"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 24,
        backgroundColor: "rgba(217,211,203,0.9)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 4px 8px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={9.333} height={6.533} viewBox="0 0 9.333 6.533" fill="none" style={{
            position: "absolute",
            left: 2.333,
            top: 5.833,
            width: 9.333,
            height: 6.533,
          }}>
            <path d={"M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 9.333 0 L 9.883 0 L 9.883 -0.55 L 9.333 -0.55 L 9.333 0 Z M 9.333 6.533 L 9.333 7.083 L 9.883 7.083 L 9.883 6.533 L 9.333 6.533 Z M 0 6.533 L -0.55 6.533 L -0.55 7.083 L 0 7.083 L 0 6.533 Z M 0 0 L 0 0.55 L 9.333 0.55 L 9.333 0 L 9.333 -0.55 L 0 -0.55 L 0 0 Z M 9.333 0 L 8.783 0 L 8.783 6.533 L 9.333 6.533 L 9.883 6.533 L 9.883 0 L 9.333 0 Z M 9.333 6.533 L 9.333 5.983 L 0 5.983 L 0 6.533 L 0 7.083 L 9.333 7.083 L 9.333 6.533 Z M 0 6.533 L 0.55 6.533 L 0.55 0 L 0 0 L -0.55 0 L -0.55 6.533 L 0 6.533 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={5.133} height={4.433} viewBox="0 0 5.133 4.433" fill="none" style={{
            position: "absolute",
            left: 4.433,
            top: 1.4,
            width: 5.133,
            height: 4.433,
          }}>
            <path d={"M 0 4.433 L 0.55 4.433 L 0.55 2.567 L 0 2.567 L -0.55 2.567 L -0.55 4.433 L 0 4.433 Z M 0 2.567 L 0.55 2.567 C 0.55 1.453 1.453 0.55 2.567 0.55 L 2.567 0 L 2.567 -0.55 C 0.845 -0.55 -0.55 0.845 -0.55 2.567 L 0 2.567 Z M 2.567 0 L 2.567 0.55 C 3.68 0.55 4.583 1.453 4.583 2.567 L 5.133 2.567 L 5.683 2.567 C 5.683 0.845 4.288 -0.55 2.567 -0.55 L 2.567 0 Z M 5.133 2.567 L 4.583 2.567 L 4.583 4.433 L 5.133 4.433 L 5.683 4.433 L 5.683 2.567 L 5.133 2.567 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={1.100} height={2.333} viewBox="-0.550 0 1.100 2.333" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 7.933,
            width: 1.100000023841858,
            height: 2.333,
          }}>
            <path d={"M 0 0 L -0.55 0 L -0.55 2.333 L 0 2.333 L 0.55 2.333 L 0.55 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "SECURE CHECKOUT"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 52,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(217,211,203,0.8)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(35,66,56)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 4px 8px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
            position: "absolute",
            left: 1.167,
            top: 3.033,
            width: 7,
            height: 7,
          }}>
            <path d={"M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 7 0 L 7.55 0 L 7.55 -0.55 L 7 -0.55 L 7 0 Z M 7 7 L 7 7.55 L 7.55 7.55 L 7.55 7 L 7 7 Z M 0 7 L -0.55 7 L -0.55 7.55 L 0 7.55 L 0 7 Z M 0 0 L 0 0.55 L 7 0.55 L 7 0 L 7 -0.55 L 0 -0.55 L 0 0 Z M 7 0 L 6.45 0 L 6.45 7 L 7 7 L 7.55 7 L 7.55 0 L 7 0 Z M 7 7 L 7 6.45 L 0 6.45 L 0 7 L 0 7.55 L 7 7.55 L 7 7 Z M 0 7 L 0.55 7 L 0.55 0 L 0 0 L -0.55 0 L -0.55 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={4.667} height={5.133} viewBox="0 0 4.667 5.133" fill="none" style={{
            position: "absolute",
            left: 8.167,
            top: 4.9,
            width: 4.667,
            height: 5.133,
          }}>
            <path d={"M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 2.1 0 L 2.489 -0.389 L 2.328 -0.55 L 2.1 -0.55 L 2.1 0 Z M 4.667 2.567 L 5.217 2.567 L 5.217 2.339 L 5.056 2.178 L 4.667 2.567 Z M 4.667 5.133 L 4.667 5.683 L 5.217 5.683 L 5.217 5.133 L 4.667 5.133 Z M 0 5.133 L -0.55 5.133 L -0.55 5.683 L 0 5.683 L 0 5.133 Z M 0 0 L 0 0.55 L 2.1 0.55 L 2.1 0 L 2.1 -0.55 L 0 -0.55 L 0 0 Z M 2.1 0 L 1.711 0.389 L 4.278 2.956 L 4.667 2.567 L 5.056 2.178 L 2.489 -0.389 L 2.1 0 Z M 4.667 2.567 L 4.117 2.567 L 4.117 5.133 L 4.667 5.133 L 5.217 5.133 L 5.217 2.567 L 4.667 2.567 Z M 4.667 5.133 L 4.667 4.583 L 0 4.583 L 0 5.133 L 0 5.683 L 4.667 5.683 L 4.667 5.133 Z M 0 5.133 L 0.55 5.133 L 0.55 0 L 0 0 L -0.55 0 L -0.55 5.133 L 0 5.133 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={1.867} height={1.867} viewBox="0 0 1.867 1.867" fill="none" style={{
            position: "absolute",
            left: 2.567,
            top: 10.033,
            width: 1.867,
            height: 1.867,
          }}>
            <path d={"M 1.867 0.933 L 1.317 0.933 C 1.317 1.145 1.145 1.317 0.933 1.317 L 0.933 1.867 L 0.933 2.417 C 1.753 2.417 2.417 1.753 2.417 0.933 L 1.867 0.933 Z M 0.933 1.867 L 0.933 1.317 C 0.722 1.317 0.55 1.145 0.55 0.933 L 0 0.933 L -0.55 0.933 C -0.55 1.753 0.114 2.417 0.933 2.417 L 0.933 1.867 Z M 0 0.933 L 0.55 0.933 C 0.55 0.722 0.722 0.55 0.933 0.55 L 0.933 0 L 0.933 -0.55 C 0.114 -0.55 -0.55 0.114 -0.55 0.933 L 0 0.933 Z M 0.933 0 L 0.933 0.55 C 1.145 0.55 1.317 0.722 1.317 0.933 L 1.867 0.933 L 2.417 0.933 C 2.417 0.114 1.753 -0.55 0.933 -0.55 L 0.933 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={1.867} height={1.867} viewBox="0 0 1.867 1.867" fill="none" style={{
            position: "absolute",
            left: 9.8,
            top: 10.033,
            width: 1.867,
            height: 1.867,
          }}>
            <path d={"M 1.867 0.933 L 1.317 0.933 C 1.317 1.145 1.145 1.317 0.933 1.317 L 0.933 1.867 L 0.933 2.417 C 1.753 2.417 2.417 1.753 2.417 0.933 L 1.867 0.933 Z M 0.933 1.867 L 0.933 1.317 C 0.722 1.317 0.55 1.145 0.55 0.933 L 0 0.933 L -0.55 0.933 C -0.55 1.753 0.114 2.417 0.933 2.417 L 0.933 1.867 Z M 0 0.933 L 0.55 0.933 C 0.55 0.722 0.722 0.55 0.933 0.55 L 0.933 0 L 0.933 -0.55 C 0.114 -0.55 -0.55 0.114 -0.55 0.933 L 0 0.933 Z M 0.933 0 L 0.933 0.55 C 1.145 0.55 1.317 0.722 1.317 0.933 L 1.867 0.933 L 2.417 0.933 C 2.417 0.114 1.753 -0.55 0.933 -0.55 L 0.933 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          textAlign: "center",
          lineHeight: "14px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "FREE SHIPPING"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 24,
        backgroundColor: "rgba(217,211,203,0.9)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 4px 8px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={8.867} height={6.533} viewBox="0 0 8.867 6.533" fill="none" style={{
            position: "absolute",
            left: 3.967,
            top: 3.967,
            width: 8.867,
            height: 6.533,
          }}>
            <path d={"M 0 0 L 0 0.55 L 5.6 0.55 L 5.6 0 L 5.6 -0.55 L 0 -0.55 L 0 0 Z M 5.6 0 L 5.6 0.55 C 7.1 0.55 8.317 1.766 8.317 3.267 L 8.867 3.267 L 9.417 3.267 C 9.417 1.159 7.708 -0.55 5.6 -0.55 L 5.6 0 Z M 8.867 3.267 L 8.317 3.267 C 8.317 4.767 7.1 5.983 5.6 5.983 L 5.6 6.533 L 5.6 7.083 C 7.708 7.083 9.417 5.375 9.417 3.267 L 8.867 3.267 Z M 5.6 6.533 L 5.6 5.983 L 0.933 5.983 L 0.933 6.533 L 0.933 7.083 L 5.6 7.083 L 5.6 6.533 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={2.333} height={4.667} viewBox="0 0 2.333 4.667" fill="none" style={{
            position: "absolute",
            left: 2.567,
            top: 1.633,
            width: 2.333,
            height: 4.667,
          }}>
            <path d={"M 0 2.333 L -0.389 1.944 L -0.778 2.333 L -0.389 2.722 L 0 2.333 Z M 2.333 0 L 1.944 -0.389 L -0.389 1.944 L 0 2.333 L 0.389 2.722 L 2.722 0.389 L 2.333 0 Z M 0 2.333 L -0.389 2.722 L 1.944 5.056 L 2.333 4.667 L 2.722 4.278 L 0.389 1.944 L 0 2.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={2.800} height={1.100} viewBox="0 -0.550 2.800 1.100" fill="none" style={{
            position: "absolute",
            left: 2.567,
            top: 3.967,
            width: 2.8,
            height: 1.100000023841858,
          }}>
            <path d={"M 0 0 L 0 0.55 L 2.8 0.55 L 2.8 0 L 2.8 -0.55 L 0 -0.55 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          textAlign: "center",
          lineHeight: "14px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "30-DAY RETURNS"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 24,
        backgroundColor: "rgba(217,211,203,0.9)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "8px 4px 8px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={9.333} height={6.533} viewBox="0 0 9.333 6.533" fill="none" style={{
            position: "absolute",
            left: 2.333,
            top: 5.833,
            width: 9.333,
            height: 6.533,
          }}>
            <path d={"M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 9.333 0 L 9.883 0 L 9.883 -0.55 L 9.333 -0.55 L 9.333 0 Z M 9.333 6.533 L 9.333 7.083 L 9.883 7.083 L 9.883 6.533 L 9.333 6.533 Z M 0 6.533 L -0.55 6.533 L -0.55 7.083 L 0 7.083 L 0 6.533 Z M 0 0 L 0 0.55 L 9.333 0.55 L 9.333 0 L 9.333 -0.55 L 0 -0.55 L 0 0 Z M 9.333 0 L 8.783 0 L 8.783 6.533 L 9.333 6.533 L 9.883 6.533 L 9.883 0 L 9.333 0 Z M 9.333 6.533 L 9.333 5.983 L 0 5.983 L 0 6.533 L 0 7.083 L 9.333 7.083 L 9.333 6.533 Z M 0 6.533 L 0.55 6.533 L 0.55 0 L 0 0 L -0.55 0 L -0.55 6.533 L 0 6.533 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={5.133} height={4.433} viewBox="0 0 5.133 4.433" fill="none" style={{
            position: "absolute",
            left: 4.433,
            top: 1.4,
            width: 5.133,
            height: 4.433,
          }}>
            <path d={"M 0 4.433 L 0.55 4.433 L 0.55 2.567 L 0 2.567 L -0.55 2.567 L -0.55 4.433 L 0 4.433 Z M 0 2.567 L 0.55 2.567 C 0.55 1.453 1.453 0.55 2.567 0.55 L 2.567 0 L 2.567 -0.55 C 0.845 -0.55 -0.55 0.845 -0.55 2.567 L 0 2.567 Z M 2.567 0 L 2.567 0.55 C 3.68 0.55 4.583 1.453 4.583 2.567 L 5.133 2.567 L 5.683 2.567 C 5.683 0.845 4.288 -0.55 2.567 -0.55 L 2.567 0 Z M 5.133 2.567 L 4.583 2.567 L 4.583 4.433 L 5.133 4.433 L 5.683 4.433 L 5.683 2.567 L 5.133 2.567 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={1.100} height={2.333} viewBox="-0.550 0 1.100 2.333" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 7.933,
            width: 1.100000023841858,
            height: 2.333,
          }}>
            <path d={"M 0 0 L -0.55 0 L -0.55 2.333 L 0 2.333 L 0.55 2.333 L 0.55 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          textAlign: "center",
          lineHeight: "14px",
          letterSpacing: "0.400px",
          color: "rgb(35,66,56)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "SECURE CHECKOUT"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 342,
      height: 241,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 120,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 170,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconTrustFreeShipping style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            letterSpacing: "0.800px",
            color: "rgb(35,66,56)",
            textTransform: "uppercase",
            flexShrink: 0,
          }}>{props.text1 ?? "FREE SHIPPING"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(41,38,36,0.72)",
            flexShrink: 0,
          }}>{props.text2 ?? "On every US order"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 1,
          backgroundColor: "rgb(201,195,188)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          width: 170,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <IconTrust30DayReturns style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            letterSpacing: "0.800px",
            color: "rgb(35,66,56)",
            textTransform: "uppercase",
            flexShrink: 0,
          }}>{props.text3 ?? "30-DAY RETURNS"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(41,38,36,0.72)",
            flexShrink: 0,
          }}>{props.text4 ?? "Shop with confidence"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderTop: "1px solid var(--color-border-subtle)",
        borderRight: "1px solid var(--color-border-subtle)",
        borderBottom: "1px solid var(--color-border-subtle)",
        borderLeft: "1px solid var(--color-border-subtle)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 170,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon3 ?? <IconTrustSecureCheckout style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            letterSpacing: "0.800px",
            color: "rgb(35,66,56)",
            textTransform: "uppercase",
            flexShrink: 0,
          }}>SECURE CHECKOUT</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(41,38,36,0.72)",
            flexShrink: 0,
          }}>Your payment is protected</span>
        </div>
        <div style={{
          position: "relative",
          width: 1,
          height: 120,
          backgroundColor: "rgb(201,195,188)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 170,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "16px 16px 16px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon4 ?? <IconTrustHelpfulSupport style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            letterSpacing: "0.800px",
            color: "rgb(35,66,56)",
            textTransform: "uppercase",
            flexShrink: 0,
          }}>HELPFUL SUPPORT</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(41,38,36,0.72)",
            flexShrink: 0,
          }}>Here when you need us</span>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 342,
      height: 176,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TrustItemPurchase
        style={{
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"free shipping"}
      />
      <TrustItemPurchase
        style={{
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"30-day returns"}
      />
      <TrustItemPurchase
        style={{
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"secure checkout"}
      />
      <TrustItemPurchase
        style={{
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"helpful support"}
      />
    </div>
  );
  const __impls = {
    // figma: Context=Page, Breakpoint=Desktop
    "context=page|breakpoint=desktop": __body0,
    // figma: Context=Purchase, Breakpoint=Desktop
    "context=purchase|breakpoint=desktop": __body1,
    // figma: Context=Checkout, Breakpoint=Desktop
    "context=checkout|breakpoint=desktop": __body2,
    // figma: Context=Checkout, Breakpoint=Mobile
    "context=checkout|breakpoint=mobile": __body3,
    // figma: Context=Page, Breakpoint=Mobile
    "context=page|breakpoint=mobile": __body4,
    // figma: Context=Purchase, Breakpoint=Mobile
    "context=purchase|breakpoint=mobile": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TrustStrip;
