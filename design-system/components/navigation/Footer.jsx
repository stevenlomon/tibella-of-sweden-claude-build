// figma node: 426:2254 Footer (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "breakpoint=" + __venc(p.breakpoint);

export function Footer(_p = {}) {
  const props = { ..._p, breakpoint: _p.breakpoint ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1440,
      backgroundColor: "var(--color-footer-background)",
      display: "flex",
      flexDirection: "column",
      padding: "80px 208px 40px 208px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(173,137,84)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 300,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 220,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div className="dt-logo-footer" role="img" aria-label={props.text1 ?? "Dove & Thistle"} style={{ position: "relative", width: 140, height: 23, flexShrink: 0 }} />
          <div aria-hidden="true" style={{ position: "relative", width: 1, height: 16, flexShrink: 0 }} />
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "24px",
            color: "var(--color-footer-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "Thoughtful style, useful comforts and meaningful gifts, chosen to make the everyday feel a little more considered."}</span>
          <div aria-hidden="true" style={{ position: "relative", width: 1, height: 16, flexShrink: 0 }} />
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
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 16,
                height: 16,
              }}>
                <path d={"M 8 0 C 5.829 0 5.556 0.01 4.703 0.048 C 3.85 0.088 3.269 0.222 2.76 0.42 C 2.226 0.62 1.742 0.935 1.343 1.343 C 0.935 1.742 0.62 2.226 0.42 2.76 C 0.222 3.268 0.087 3.85 0.048 4.7 C 0.01 5.555 0 5.827 0 8.001 C 0 10.173 0.01 10.445 0.048 11.298 C 0.088 12.15 0.222 12.731 0.42 13.24 C 0.625 13.766 0.898 14.212 1.343 14.657 C 1.787 15.102 2.233 15.376 2.759 15.58 C 3.269 15.778 3.849 15.913 4.701 15.952 C 5.555 15.99 5.827 16 8 16 C 10.173 16 10.444 15.99 11.298 15.952 C 12.149 15.912 12.732 15.778 13.241 15.58 C 13.775 15.38 14.258 15.064 14.657 14.657 C 15.102 14.212 15.375 13.766 15.58 13.24 C 15.777 12.731 15.912 12.15 15.952 11.298 C 15.99 10.445 16 10.173 16 8 C 16 5.827 15.99 5.555 15.952 4.701 C 15.912 3.85 15.777 3.268 15.58 2.76 C 15.38 2.226 15.065 1.742 14.657 1.343 C 14.258 0.935 13.774 0.62 13.24 0.42 C 12.73 0.222 12.148 0.087 11.297 0.048 C 10.443 0.01 10.172 0 7.998 0 L 8 0 Z M 7.283 1.442 L 8.001 1.442 C 10.137 1.442 10.39 1.449 11.233 1.488 C 12.013 1.523 12.437 1.654 12.719 1.763 C 13.092 1.908 13.359 2.082 13.639 2.362 C 13.919 2.642 14.092 2.908 14.237 3.282 C 14.347 3.563 14.477 3.987 14.512 4.767 C 14.551 5.61 14.559 5.863 14.559 7.998 C 14.559 10.133 14.551 10.387 14.512 11.23 C 14.477 12.01 14.346 12.433 14.237 12.715 C 14.108 13.062 13.903 13.376 13.638 13.634 C 13.358 13.914 13.092 14.087 12.718 14.232 C 12.438 14.342 12.014 14.472 11.233 14.508 C 10.39 14.546 10.137 14.555 8.001 14.555 C 5.865 14.555 5.611 14.546 4.768 14.508 C 3.988 14.472 3.565 14.342 3.283 14.232 C 2.936 14.103 2.622 13.899 2.363 13.634 C 2.097 13.376 1.892 13.061 1.763 12.714 C 1.654 12.433 1.523 12.009 1.488 11.229 C 1.45 10.386 1.442 10.133 1.442 7.996 C 1.442 5.859 1.45 5.608 1.488 4.765 C 1.524 3.985 1.654 3.561 1.764 3.279 C 1.909 2.906 2.083 2.639 2.363 2.359 C 2.643 2.079 2.909 1.906 3.283 1.761 C 3.565 1.651 3.988 1.521 4.768 1.485 C 5.506 1.451 5.792 1.441 7.283 1.44 L 7.283 1.442 Z M 12.271 2.77 C 12.145 2.77 12.02 2.795 11.904 2.843 C 11.787 2.891 11.681 2.962 11.592 3.051 C 11.503 3.14 11.432 3.246 11.384 3.363 C 11.336 3.479 11.311 3.604 11.311 3.73 C 11.311 3.856 11.336 3.981 11.384 4.097 C 11.432 4.214 11.503 4.32 11.592 4.409 C 11.681 4.498 11.787 4.569 11.904 4.617 C 12.02 4.665 12.145 4.69 12.271 4.69 C 12.526 4.69 12.77 4.589 12.95 4.409 C 13.13 4.229 13.231 3.985 13.231 3.73 C 13.231 3.475 13.13 3.231 12.95 3.051 C 12.77 2.871 12.526 2.77 12.271 2.77 Z M 8.001 3.892 C 7.456 3.883 6.915 3.983 6.409 4.186 C 5.903 4.389 5.443 4.69 5.054 5.072 C 4.666 5.455 4.357 5.911 4.147 6.413 C 3.936 6.916 3.828 7.456 3.828 8 C 3.828 8.545 3.936 9.085 4.147 9.588 C 4.357 10.09 4.666 10.546 5.054 10.929 C 5.443 11.311 5.903 11.612 6.409 11.815 C 6.915 12.018 7.456 12.118 8.001 12.109 C 9.08 12.092 10.108 11.652 10.865 10.883 C 11.622 10.115 12.046 9.079 12.046 8 C 12.046 6.922 11.622 5.886 10.865 5.118 C 10.108 4.349 9.08 3.909 8.001 3.892 Z M 8.001 5.333 C 8.351 5.333 8.698 5.402 9.022 5.536 C 9.345 5.67 9.639 5.866 9.887 6.114 C 10.135 6.362 10.331 6.656 10.465 6.979 C 10.599 7.303 10.668 7.65 10.668 8 C 10.668 8.35 10.599 8.697 10.465 9.021 C 10.331 9.344 10.135 9.638 9.887 9.886 C 9.639 10.134 9.345 10.33 9.022 10.464 C 8.698 10.598 8.351 10.667 8.001 10.667 C 7.294 10.667 6.615 10.386 6.115 9.886 C 5.615 9.386 5.334 8.707 5.334 8 C 5.334 7.293 5.615 6.614 6.115 6.114 C 6.615 5.614 7.294 5.333 8.001 5.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              letterSpacing: "0.100em",
              color: "var(--color-footer-accent)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>{props.text3 ?? "INSTAGRAM"}</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 112,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.100em",
            color: "var(--color-footer-accent)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text4 ?? "SHOP"}</span>
          <div aria-hidden="true" style={{ position: "relative", width: 1, height: 8, flexShrink: 0 }} />
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Clothing</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Shoes</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Home &amp; Living</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Gifts</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Seasonal</span>
        </div>
        <div style={{
          position: "relative",
          width: 164,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.100em",
            color: "var(--color-footer-accent)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>CUSTOMER CARE</span>
          <div aria-hidden="true" style={{ position: "relative", width: 1, height: 8, flexShrink: 0 }} />
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>About Dove &amp; Thistle</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Contact Us</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>FAQs</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Track Your Order</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Shipping &amp; Delivery</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Returns &amp; Refunds</span>
        </div>
        <div style={{
          position: "relative",
          width: 220,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.100em",
            color: "var(--color-footer-accent)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>POLICIES</span>
          <div aria-hidden="true" style={{ position: "relative", width: 1, height: 8, flexShrink: 0 }} />
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Privacy Policy</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Terms of Service</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Billing Terms &amp; Conditions</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Payment Policy</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>IP &amp; DMCA Policy</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "28px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Do Not Sell or Share My Personal Information</span>
        </div>
        <div style={{
          position: "relative",
          width: 244,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.100em",
            color: "var(--color-footer-accent)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>BUSINESS INFORMATION</span>
          <div aria-hidden="true" style={{ position: "relative", width: 1, height: 8, flexShrink: 0 }} />
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "24px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Dove &amp; Thistle is operated by [LEGAL ENTITY NAME].</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "24px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Registration no. [COMPANY NUMBER]</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "24px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>support@doveandthistle.com</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "24px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>[BUSINESS PHONE]</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "24px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>[PHYSICAL BUSINESS ADDRESS]</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "24px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Customer care: [HOURS + TIME ZONE]</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "24px",
            color: "var(--color-footer-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Response time: [EXPECTED RESPONSE TIME]</span>
        </div>
      </div>
      <div aria-hidden="true" style={{ position: "relative", width: 1, height: 48, flexShrink: 0 }} />
      <div style={{
        position: "relative",
        height: 1,
        backgroundColor: "var(--color-footer-divider)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div aria-hidden="true" style={{ position: "relative", width: 1, height: 24, flexShrink: 0 }} />
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
        <div style={{
          position: "relative",
          width: 650,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.100em",
            color: "var(--color-footer-accent)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>ACCEPTED PAYMENT METHODS</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--color-footer-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Visa · Mastercard · American Express · PayPal · Shop Pay · Apple Pay · Google Pay</span>
        </div>
        <div style={{
          position: "relative",
          width: 350,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            textAlign: "right",
            lineHeight: "16px",
            letterSpacing: "0.100em",
            color: "var(--color-footer-accent)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>SECURE CHECKOUT</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            textAlign: "right",
            lineHeight: "18px",
            color: "var(--color-footer-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Payments are encrypted and processed by trusted providers.</span>
        </div>
      </div>
      <div aria-hidden="true" style={{ position: "relative", width: 1, height: 24, flexShrink: 0 }} />
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
          width: 500,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "18px",
          color: "var(--color-footer-text-muted)",
          flexShrink: 0,
        }}>© 2026 Dove &amp; Thistle. All rights reserved.</span>
        <span style={{
          position: "relative",
          width: 220,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "right",
          lineHeight: "18px",
          color: "var(--color-footer-text-muted)",
          flexShrink: 0,
        }}>United States · USD</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      backgroundColor: "var(--color-text-brand)",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      padding: "44px 24px 36px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 144,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="dt-logo-footer" role="img" aria-label={props.text1 ?? "Dove & Thistle"} style={{ position: "relative", width: 140, height: 23, flexShrink: 0 }} />
        <span style={{
          position: "relative",
          opacity: 0.9,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "21px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Thoughtful style, useful comforts and meaningful gifts, chosen to make the everyday feel a little more considered."}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "INSTAGRAM"}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(173,137,84,0.55)",
        borderRight: "1px solid rgba(173,137,84,0.55)",
        borderBottom: "1px solid rgba(173,137,84,0.55)",
        borderLeft: "1px solid rgba(173,137,84,0.55)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "20px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          lineHeight: "16px",
          letterSpacing: "0.900px",
          color: "rgb(173,137,84)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "SHOP"}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Clothing</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Shoes</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Home &amp; Living</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Gifts</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Seasonal</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(173,137,84,0.55)",
        borderRight: "1px solid rgba(173,137,84,0.55)",
        borderBottom: "1px solid rgba(173,137,84,0.55)",
        borderLeft: "1px solid rgba(173,137,84,0.55)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "20px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          lineHeight: "16px",
          letterSpacing: "0.900px",
          color: "rgb(173,137,84)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>CUSTOMER CARE</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>About Dove &amp; Thistle</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Contact Us</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>FAQs</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Track Your Order</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Shipping &amp; Delivery</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Returns &amp; Refunds</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(173,137,84,0.55)",
        borderRight: "1px solid rgba(173,137,84,0.55)",
        borderBottom: "1px solid rgba(173,137,84,0.55)",
        borderLeft: "1px solid rgba(173,137,84,0.55)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "20px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          lineHeight: "16px",
          letterSpacing: "0.900px",
          color: "rgb(173,137,84)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>POLICIES</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Privacy Policy</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Terms of Service</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Billing Terms &amp; Conditions</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Payment Policy</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>IP &amp; DMCA Policy</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Do Not Sell or Share My Personal Information</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(173,137,84,0.55)",
        borderRight: "1px solid rgba(173,137,84,0.55)",
        borderBottom: "1px solid rgba(173,137,84,0.55)",
        borderLeft: "1px solid rgba(173,137,84,0.55)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "20px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          lineHeight: "16px",
          letterSpacing: "0.900px",
          color: "rgb(173,137,84)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>BUSINESS INFORMATION</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Dove &amp; Thistle is operated by [LEGAL ENTITY NAME].</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Registration no. [COMPANY NUMBER]</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>support@doveandthistle.com</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>[BUSINESS PHONE]</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>[PHYSICAL BUSINESS ADDRESS]</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Customer care: [HOURS + TIME ZONE]</span>
          <span style={{
            position: "relative",
            fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Response time: [EXPECTED RESPONSE TIME]</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 157,
        overflow: "hidden",
        borderTop: "1px solid rgba(173,137,84,0.55)",
        borderRight: "1px solid rgba(173,137,84,0.55)",
        borderBottom: "1px solid rgba(173,137,84,0.55)",
        borderLeft: "1px solid rgba(173,137,84,0.55)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "20px 0px 20px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          lineHeight: "16px",
          letterSpacing: "0.900px",
          color: "rgb(173,137,84)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>ACCEPTED PAYMENT METHODS</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "21px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Visa  ·  Mastercard  ·  American Express</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "21px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>PayPal  ·  Shop Pay  ·  Apple Pay  ·  Google Pay</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          lineHeight: "16px",
          letterSpacing: "0.900px",
          color: "rgb(173,137,84)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>SECURE CHECKOUT</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: "21px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Payments are encrypted and processed by trusted providers.</span>
      </div>
      <div style={{
        position: "relative",
        height: 65,
        overflow: "hidden",
        borderTop: "1px solid rgba(173,137,84,0.55)",
        borderRight: "1px solid rgba(173,137,84,0.55)",
        borderBottom: "1px solid rgba(173,137,84,0.55)",
        borderLeft: "1px solid rgba(173,137,84,0.55)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "20px 0px 20px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          opacity: 0.85,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>© 2026 Dove &amp; Thistle. All rights reserved.</span>
        <span style={{
          position: "relative",
          opacity: 0.85,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>United States  ·  USD</span>
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
export default Footer;
