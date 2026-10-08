import { AnnouncementBar } from './AnnouncementBar.jsx';
import { Header } from './Header.jsx';
import { NavigationSharedCategoryClothing } from './NavigationSharedCategoryClothing.jsx';

// figma node: 429:2326 Navigation Menu (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "breakpoint=" + __venc(p.breakpoint) + '|' + "state=" + __venc(p.state);

export function NavigationMenu(_p = {}) {
  const props = { ..._p, breakpoint: _p.breakpoint ?? "desktop", state: _p.state ?? "clothing open" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1440,
      backgroundColor: "var(--color-bg-surface)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <AnnouncementBar
        style={{
          position: "relative",
          height: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        breakpoint={"desktop"}
      />
      <Header
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"desktop"}
      />
      <div style={{
        position: "relative",
        backgroundColor: "var(--color-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
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
          width: 1024,
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-16) * 1px)",
          padding: "32px 0px 32px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingTop: "calc(var(--spacing-32) * 1px)",
          paddingBottom: "calc(var(--spacing-32) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "Clothing"}</span>
          <NavigationSharedCategoryClothing style={{ position: "relative", width: 342, flexShrink: 0 }} />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 844,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Header
        style={{
          position: "relative",
          height: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"mobile drawer"}
      />
      <div style={{
        position: "relative",
        backgroundColor: "var(--color-bg-surface)",
        display: "flex",
        flexDirection: "column",
        padding: "12px 24px 24px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-24) * 1px)",
        paddingRight: "calc(var(--spacing-24) * 1px)",
        paddingBottom: "calc(var(--spacing-24) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
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
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "Clothing"}</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10} height={5} viewBox="0 0 10 5" fill="none" style={{
              position: "absolute",
              left: 5,
              top: 7,
              width: 10,
              height: 5,
              color: "var(--color-text-brand)",
            }}>
              <path d={"M -0.53 4.47 C -0.823 4.763 -0.823 5.237 -0.53 5.53 C -0.237 5.823 0.237 5.823 0.53 5.53 L 0 5 L -0.53 4.47 Z M 5 0 L 5.53 -0.53 C 5.237 -0.823 4.763 -0.823 4.47 -0.53 L 5 0 Z M 9.47 5.53 C 9.763 5.823 10.237 5.823 10.53 5.53 C 10.823 5.237 10.823 4.763 10.53 4.47 L 10 5 L 9.47 5.53 Z M 0 5 L 0.53 5.53 L 5.53 0.53 L 5 0 L 4.47 -0.53 L -0.53 4.47 L 0 5 Z M 5 0 L 4.47 0.53 L 9.47 5.53 L 10 5 L 10.53 4.47 L 5.53 -0.53 L 5 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px 0px 16px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-16) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <NavigationSharedCategoryClothing style={{ position: "relative", flexGrow: 1, width: "auto" }} />
        </div>
        <div style={{
          position: "relative",
          height: 56,
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
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text2 ?? "Shoes"}</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10} height={5} viewBox="0 0 10 5" fill="none" style={{
              position: "absolute",
              left: 5,
              top: 8,
              width: 10,
              height: 5,
              color: "var(--color-text-muted)",
            }}>
              <path d={"M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.763 5.823 5.237 5.823 5.53 5.53 L 5 5 Z M 10.53 0.53 C 10.823 0.237 10.823 -0.237 10.53 -0.53 C 10.237 -0.823 9.763 -0.823 9.47 -0.53 L 10 0 L 10.53 0.53 Z M 0 0 L -0.53 0.53 L 4.47 5.53 L 5 5 L 5.53 4.47 L 0.53 -0.53 L 0 0 Z M 5 5 L 5.53 5.53 L 10.53 0.53 L 10 0 L 9.47 -0.53 L 4.47 4.47 L 5 5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 56,
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
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text3 ?? "Home & Living"}</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10} height={5} viewBox="0 0 10 5" fill="none" style={{
              position: "absolute",
              left: 5,
              top: 8,
              width: 10,
              height: 5,
              color: "var(--color-text-muted)",
            }}>
              <path d={"M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.763 5.823 5.237 5.823 5.53 5.53 L 5 5 Z M 10.53 0.53 C 10.823 0.237 10.823 -0.237 10.53 -0.53 C 10.237 -0.823 9.763 -0.823 9.47 -0.53 L 10 0 L 10.53 0.53 Z M 0 0 L -0.53 0.53 L 4.47 5.53 L 5 5 L 5.53 4.47 L 0.53 -0.53 L 0 0 Z M 5 5 L 5.53 5.53 L 10.53 0.53 L 10 0 L 9.47 -0.53 L 4.47 4.47 L 5 5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 56,
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
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text4 ?? "Gifts"}</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10} height={5} viewBox="0 0 10 5" fill="none" style={{
              position: "absolute",
              left: 5,
              top: 8,
              width: 10,
              height: 5,
              color: "var(--color-text-muted)",
            }}>
              <path d={"M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.763 5.823 5.237 5.823 5.53 5.53 L 5 5 Z M 10.53 0.53 C 10.823 0.237 10.823 -0.237 10.53 -0.53 C 10.237 -0.823 9.763 -0.823 9.47 -0.53 L 10 0 L 10.53 0.53 Z M 0 0 L -0.53 0.53 L 4.47 5.53 L 5 5 L 5.53 4.47 L 0.53 -0.53 L 0 0 Z M 5 5 L 5.53 5.53 L 10.53 0.53 L 10 0 L 9.47 -0.53 L 4.47 4.47 L 5 5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 56,
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
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>Seasonal</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10} height={5} viewBox="0 0 10 5" fill="none" style={{
              position: "absolute",
              left: 5,
              top: 8,
              width: 10,
              height: 5,
              color: "var(--color-text-muted)",
            }}>
              <path d={"M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.763 5.823 5.237 5.823 5.53 5.53 L 5 5 Z M 10.53 0.53 C 10.823 0.237 10.823 -0.237 10.53 -0.53 C 10.237 -0.823 9.763 -0.823 9.47 -0.53 L 10 0 L 10.53 0.53 Z M 0 0 L -0.53 0.53 L 4.47 5.53 L 5 5 L 5.53 4.47 L 0.53 -0.53 L 0 0 Z M 5 5 L 5.53 5.53 L 10.53 0.53 L 10 0 L 9.47 -0.53 L 4.47 4.47 L 5 5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--color-border-subtle)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>About</span>
        </div>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>Contact</span>
        </div>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>FAQ</span>
        </div>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>Track Your Order</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Breakpoint=Desktop, State=Clothing Open
    "breakpoint=desktop|state=clothing open": __body0,
    // figma: Breakpoint=Mobile, State=Clothing Open
    "breakpoint=mobile|state=clothing open": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NavigationMenu;
