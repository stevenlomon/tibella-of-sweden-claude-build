// figma node: 424:1510 Header (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Header(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1440,
      display: "flex",
      flexDirection: "row",
      padding: "24px 208px 24px 208px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(35,66,56)",
      ...props.style,
    }}>
      <div className="dt-logo-wordmark" role="img" aria-label="Dove & Thistle" style={{
        position: "relative",
        width: 140,
        height: 23,
        flexShrink: 0,
        alignSelf: "center",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>{props.text1 ?? "Clothing"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>{props.text2 ?? "Shoes"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>{props.text3 ?? "Home & Living"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>{props.text4 ?? "Gifts"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>Seasonal</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>About </span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>Contact</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>FAQ</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>Track Your Order</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 16.667,
            height: 16.667,
          }}>
            <path d={"M 16.667 8.333 L 16.1 8.333 C 16.1 12.623 12.623 16.1 8.333 16.1 L 8.333 16.667 L 8.333 17.233 C 13.249 17.233 17.233 13.249 17.233 8.333 L 16.667 8.333 Z M 8.333 16.667 L 8.333 16.1 C 4.044 16.1 0.567 12.623 0.567 8.333 L 0 8.333 L -0.567 8.333 C -0.567 13.249 3.418 17.233 8.333 17.233 L 8.333 16.667 Z M 0 8.333 L 0.567 8.333 C 0.567 4.044 4.044 0.567 8.333 0.567 L 8.333 0 L 8.333 -0.567 C 3.418 -0.567 -0.567 3.418 -0.567 8.333 L 0 8.333 Z M 8.333 0 L 8.333 0.567 C 12.623 0.567 16.1 4.044 16.1 8.333 L 16.667 8.333 L 17.233 8.333 C 17.233 3.418 13.249 -0.567 8.333 -0.567 L 8.333 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
            position: "absolute",
            left: 20.667,
            top: 20.667,
            width: 6,
            height: 6,
          }}>
            <path d={"M 0.401 -0.401 C 0.179 -0.622 -0.179 -0.622 -0.401 -0.401 C -0.622 -0.179 -0.622 0.179 -0.401 0.401 L 0 0 L 0.401 -0.401 Z M 5.599 6.401 C 5.821 6.622 6.179 6.622 6.401 6.401 C 6.622 6.179 6.622 5.821 6.401 5.599 L 6 6 L 5.599 6.401 Z M 0 0 L -0.401 0.401 L 5.599 6.401 L 6 6 L 6.401 5.599 L 0.401 -0.401 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={17.333} height={14.667} viewBox="0 0 17.333 14.667" fill="none" style={{
            position: "absolute",
            left: 7.333,
            top: 11.333,
            width: 17.333,
            height: 14.667,
          }}>
            <path d={"M 0 0 L 0 -0.567 C -0.161 -0.567 -0.315 -0.498 -0.423 -0.377 C -0.53 -0.257 -0.581 -0.096 -0.563 0.064 L 0 0 Z M 17.333 0 L 17.899 0.039 C 17.909 -0.118 17.855 -0.272 17.747 -0.387 C 17.64 -0.502 17.49 -0.567 17.333 -0.567 L 17.333 0 Z M 16.333 14.667 L 16.333 15.233 C 16.631 15.233 16.878 15.003 16.899 14.705 L 16.333 14.667 Z M 1.667 14.667 L 1.104 14.731 C 1.136 15.017 1.378 15.233 1.667 15.233 L 1.667 14.667 Z M 0 0 L 0 0.567 L 17.333 0.567 L 17.333 0 L 17.333 -0.567 L 0 -0.567 L 0 0 Z M 17.333 0 L 16.768 -0.039 L 15.768 14.628 L 16.333 14.667 L 16.899 14.705 L 17.899 0.039 L 17.333 0 Z M 16.333 14.667 L 16.333 14.1 L 1.667 14.1 L 1.667 14.667 L 1.667 15.233 L 16.333 15.233 L 16.333 14.667 Z M 1.667 14.667 L 2.23 14.603 L 0.563 -0.064 L 0 0 L -0.563 0.064 L 1.104 14.731 L 1.667 14.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={8} height={7} viewBox="0 0 8 7" fill="none" style={{
            position: "absolute",
            left: 12,
            top: 5,
            width: 8,
            height: 7,
          }}>
            <path d={"M -0.567 7 C -0.567 7.313 -0.313 7.567 0 7.567 C 0.313 7.567 0.567 7.313 0.567 7 L 0 7 L -0.567 7 Z M 4 0 L 4 -0.567 L 4 0 Z M 8 4 L 8.567 4 L 8 4 Z M 7.433 7 C 7.433 7.313 7.687 7.567 8 7.567 C 8.313 7.567 8.567 7.313 8.567 7 L 8 7 L 7.433 7 Z M 0 7 L 0.567 7 L 0.567 4 L 0 4 L -0.567 4 L -0.567 7 L 0 7 Z M 0 4 L 0.567 4 C 0.567 3.089 0.928 2.216 1.572 1.572 L 1.172 1.172 L 0.771 0.771 C -0.086 1.627 -0.567 2.789 -0.567 4 L 0 4 Z M 1.172 1.172 L 1.572 1.572 C 2.216 0.928 3.089 0.567 4 0.567 L 4 0 L 4 -0.567 C 2.789 -0.567 1.627 -0.086 0.771 0.771 L 1.172 1.172 Z M 4 0 L 4 0.567 C 4.911 0.567 5.784 0.928 6.428 1.572 L 6.828 1.172 L 7.229 0.771 C 6.373 -0.086 5.211 -0.567 4 -0.567 L 4 0 Z M 6.828 1.172 L 6.428 1.572 C 7.072 2.216 7.433 3.089 7.433 4 L 8 4 L 8.567 4 C 8.567 2.789 8.086 1.627 7.229 0.771 L 6.828 1.172 Z M 8 4 L 7.433 4 L 7.433 7 L 8 7 L 8.567 7 L 8.567 4 L 8 4 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(35,66,56)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14} height={10} viewBox="0 0 14 10" fill="none" style={{
          position: "absolute",
          left: 3,
          top: 5,
          width: 14,
          height: 10,
        }}>
          <path d={"M 0 -0.75 L -0.75 -0.75 L -0.75 0.75 L 0 0.75 L 0 0 L 0 -0.75 Z M 14 0.75 L 14.75 0.75 L 14.75 -0.75 L 14 -0.75 L 14 0 L 14 0.75 Z M 0 4.25 L -0.75 4.25 L -0.75 5.75 L 0 5.75 L 0 5 L 0 4.25 Z M 14 5.75 L 14.75 5.75 L 14.75 4.25 L 14 4.25 L 14 5 L 14 5.75 Z M 0 9.25 L -0.75 9.25 L -0.75 10.75 L 0 10.75 L 0 10 L 0 9.25 Z M 14 10.75 L 14.75 10.75 L 14.75 9.25 L 14 9.25 L 14 10 L 14 10.75 Z M 0 0 L 0 0.75 L 14 0.75 L 14 0 L 14 -0.75 L 0 -0.75 L 0 0 Z M 0 5 L 0 5.75 L 14 5.75 L 14 5 L 14 4.25 L 0 4.25 L 0 5 Z M 0 10 L 0 10.75 L 14 10.75 L 14 10 L 14 9.25 L 0 9.25 L 0 10 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
        fontWeight: 600,
        fontSize: 25,
        whiteSpace: "nowrap",
        lineHeight: "30px",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text1 ?? "Dove & Thistle"}</span>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11} height={11} viewBox="0 0 11 11" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 3.5,
            width: 11,
            height: 11,
          }}>
            <path d={"M 11 5.5 L 10.3 5.5 C 10.3 8.151 8.151 10.3 5.5 10.3 L 5.5 11 L 5.5 11.7 C 8.924 11.7 11.7 8.924 11.7 5.5 L 11 5.5 Z M 5.5 11 L 5.5 10.3 C 2.849 10.3 0.7 8.151 0.7 5.5 L 0 5.5 L -0.7 5.5 C -0.7 8.924 2.076 11.7 5.5 11.7 L 5.5 11 Z M 0 5.5 L 0.7 5.5 C 0.7 2.849 2.849 0.7 5.5 0.7 L 5.5 0 L 5.5 -0.7 C 2.076 -0.7 -0.7 2.076 -0.7 5.5 L 0 5.5 Z M 5.5 0 L 5.5 0.7 C 8.151 0.7 10.3 2.849 10.3 5.5 L 11 5.5 L 11.7 5.5 C 11.7 2.076 8.924 -0.7 5.5 -0.7 L 5.5 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
            position: "absolute",
            left: 13,
            top: 13,
            width: 4,
            height: 4,
          }}>
            <path d={"M 0 0 L -0.495 0.495 L 3.505 4.495 L 4 4 L 4.495 3.505 L 0.495 -0.495 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={10} viewBox="0 0 12 10" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 7,
            width: 12,
            height: 10,
          }}>
            <path d={"M 0 0 L 0 -0.7 L -0.773 -0.7 L -0.697 0.07 L 0 0 Z M 12 0 L 12.697 0.07 L 12.773 -0.7 L 12 -0.7 L 12 0 Z M 11 10 L 11 10.7 L 11.633 10.7 L 11.697 10.07 L 11 10 Z M 1 10 L 0.303 10.07 L 0.367 10.7 L 1 10.7 L 1 10 Z M 0 0 L 0 0.7 L 12 0.7 L 12 0 L 12 -0.7 L 0 -0.7 L 0 0 Z M 12 0 L 11.303 -0.07 L 10.303 9.93 L 11 10 L 11.697 10.07 L 12.697 0.07 L 12 0 Z M 11 10 L 11 9.3 L 1 9.3 L 1 10 L 1 10.7 L 11 10.7 L 11 10 Z M 1 10 L 1.697 9.93 L 0.697 -0.07 L 0 0 L -0.697 0.07 L 0.303 10.07 L 1 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={6} height={5} viewBox="0 0 6 5" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 2,
            width: 6,
            height: 5,
          }}>
            <path d={"M 3 0 L 3 -0.7 L 3 0 Z M 6 3 L 6.7 3 L 6 3 Z M 0 5 L 0.7 5 L 0.7 3 L 0 3 L -0.7 3 L -0.7 5 L 0 5 Z M 0 3 L 0.7 3 C 0.7 2.39 0.942 1.805 1.374 1.374 L 0.879 0.879 L 0.384 0.384 C -0.31 1.078 -0.7 2.019 -0.7 3 L 0 3 Z M 0.879 0.879 L 1.374 1.374 C 1.805 0.942 2.39 0.7 3 0.7 L 3 0 L 3 -0.7 C 2.019 -0.7 1.078 -0.31 0.384 0.384 L 0.879 0.879 Z M 3 0 L 3 0.7 C 3.61 0.7 4.195 0.942 4.626 1.374 L 5.121 0.879 L 5.616 0.384 C 4.922 -0.31 3.981 -0.7 3 -0.7 L 3 0 Z M 5.121 0.879 L 4.626 1.374 C 5.058 1.805 5.3 2.39 5.3 3 L 6 3 L 6.7 3 C 6.7 2.019 6.31 1.078 5.616 0.384 L 5.121 0.879 Z M 6 3 L 5.3 3 L 5.3 5 L 6 5 L 6.7 5 L 6.7 3 L 6 3 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 64,
      backgroundColor: "var(--color-bg-surface)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
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
          color: "var(--color-text-primary)",
        }}>
          <path d={"M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 13.47 14.53 C 13.763 14.823 14.237 14.823 14.53 14.53 C 14.823 14.237 14.823 13.763 14.53 13.47 L 14 14 L 13.47 14.53 Z M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14 0 L 14.53 0.53 Z M -0.53 13.47 C -0.823 13.763 -0.823 14.237 -0.53 14.53 C -0.237 14.823 0.237 14.823 0.53 14.53 L 0 14 L -0.53 13.47 Z M 0 0 L -0.53 0.53 L 13.47 14.53 L 14 14 L 14.53 13.47 L 0.53 -0.53 L 0 0 Z M 14 0 L 13.47 -0.53 L -0.53 13.47 L 0 14 L 0.53 14.53 L 14.53 0.53 L 14 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
        fontWeight: 600,
        fontSize: 25,
        whiteSpace: "nowrap",
        lineHeight: "30px",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text1 ?? "Dove & Thistle"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.500} height={11.500} viewBox="0 0 11.500 11.500" fill="none" style={{
            position: "absolute",
            left: 2.75,
            top: 2.75,
            width: 11.5,
            height: 11.5,
            color: "var(--color-text-brand)",
          }}>
            <path d={"M 11.5 5.75 L 10.75 5.75 C 10.75 8.511 8.511 10.75 5.75 10.75 L 5.75 11.5 L 5.75 12.25 C 9.34 12.25 12.25 9.34 12.25 5.75 L 11.5 5.75 Z M 5.75 11.5 L 5.75 10.75 C 2.989 10.75 0.75 8.511 0.75 5.75 L 0 5.75 L -0.75 5.75 C -0.75 9.34 2.16 12.25 5.75 12.25 L 5.75 11.5 Z M 0 5.75 L 0.75 5.75 C 0.75 2.989 2.989 0.75 5.75 0.75 L 5.75 0 L 5.75 -0.75 C 2.16 -0.75 -0.75 2.16 -0.75 5.75 L 0 5.75 Z M 5.75 0 L 5.75 0.75 C 8.511 0.75 10.75 2.989 10.75 5.75 L 11.5 5.75 L 12.25 5.75 C 12.25 2.16 9.34 -0.75 5.75 -0.75 L 5.75 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={4.250} height={4.250} viewBox="0 0 4.250 4.250" fill="none" style={{
            position: "absolute",
            left: 12.75,
            top: 12.75,
            width: 4.25,
            height: 4.25,
            color: "var(--color-text-brand)",
          }}>
            <path d={"M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 3.72 4.78 C 4.013 5.073 4.487 5.073 4.78 4.78 C 5.073 4.487 5.073 4.013 4.78 3.72 L 4.25 4.25 L 3.72 4.78 Z M 0 0 L -0.53 0.53 L 3.72 4.78 L 4.25 4.25 L 4.78 3.72 L 0.53 -0.53 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={10.500} viewBox="0 0 12 10.500" fill="none" style={{
            position: "absolute",
            left: 4,
            top: 6.5,
            width: 12,
            height: 10.5,
            color: "var(--color-text-brand)",
          }}>
            <path d={"M 0 0 L 0 -0.75 C -0.208 -0.75 -0.407 -0.663 -0.549 -0.511 C -0.691 -0.359 -0.763 -0.154 -0.748 0.053 L 0 0 Z M 12 0 L 12.748 0.053 C 12.763 -0.154 12.691 -0.359 12.549 -0.511 C 12.407 -0.663 12.208 -0.75 12 -0.75 L 12 0 Z M 11.25 10.5 L 11.25 11.25 C 11.643 11.25 11.97 10.946 11.998 10.553 L 11.25 10.5 Z M 0.75 10.5 L 0.002 10.553 C 0.03 10.946 0.357 11.25 0.75 11.25 L 0.75 10.5 Z M 0 0 L 0 0.75 L 12 0.75 L 12 0 L 12 -0.75 L 0 -0.75 L 0 0 Z M 12 0 L 11.252 -0.053 L 10.502 10.447 L 11.25 10.5 L 11.998 10.553 L 12.748 0.053 L 12 0 Z M 11.25 10.5 L 11.25 9.75 L 0.75 9.75 L 0.75 10.5 L 0.75 11.25 L 11.25 11.25 L 11.25 10.5 Z M 0.75 10.5 L 1.498 10.447 L 0.748 -0.053 L 0 0 L -0.748 0.053 L 0.002 10.553 L 0.75 10.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={6} height={4.500} viewBox="0 0 6 4.500" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 2.5,
            width: 6,
            height: 4.5,
            color: "var(--color-text-brand)",
          }}>
            <path d={"M -0.75 4.5 C -0.75 4.914 -0.414 5.25 0 5.25 C 0.414 5.25 0.75 4.914 0.75 4.5 L 0 4.5 L -0.75 4.5 Z M 5.25 4.5 C 5.25 4.914 5.586 5.25 6 5.25 C 6.414 5.25 6.75 4.914 6.75 4.5 L 6 4.5 L 5.25 4.5 Z M 0 4.5 L 0.75 4.5 L 0.75 3 L 0 3 L -0.75 3 L -0.75 4.5 L 0 4.5 Z M 0 3 L 0.75 3 C 0.75 1.764 1.764 0.75 3 0.75 L 3 0 L 3 -0.75 C 0.936 -0.75 -0.75 0.936 -0.75 3 L 0 3 Z M 3 0 L 3 0.75 C 4.236 0.75 5.25 1.764 5.25 3 L 6 3 L 6.75 3 C 6.75 0.936 5.064 -0.75 3 -0.75 L 3 0 Z M 6 3 L 5.25 3 L 5.25 4.5 L 6 4.5 L 6.75 4.5 L 6.75 3 L 6 3 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Desktop
    "mode=desktop": __body0,
    // figma: Mode=Mobile
    "mode=mobile": __body1,
    // figma: Mode=Mobile Drawer
    "mode=mobile drawer": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Header;
