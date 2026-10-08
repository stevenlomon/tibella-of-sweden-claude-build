import { IconTrust30DayReturns } from './IconTrust30DayReturns.jsx';
import { IconTrustFreeShipping } from './IconTrustFreeShipping.jsx';
import { IconTrustHelpfulSupport } from './IconTrustHelpfulSupport.jsx';
import { IconTrustSecureCheckout } from './IconTrustSecureCheckout.jsx';

// figma node: 438:2753 Trust Item / Purchase (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function TrustItemPurchase(_p = {}) {
  const props = { ..._p, type: _p.type ?? "free shipping" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 342,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 174.5,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconTrustFreeShipping style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          letterSpacing: "0.400px",
          color: "var(--color-action-primary)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.text1 ?? "FREE SHIPPING"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--color-text-muted)",
        flexShrink: 0,
      }}>{props.text2 ?? "On every US order"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 342,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 156.5,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconTrust30DayReturns style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          letterSpacing: "0.400px",
          color: "var(--color-action-primary)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.text1 ?? "30-DAY RETURNS"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--color-text-muted)",
        flexShrink: 0,
      }}>{props.text2 ?? "Shop with confidence"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 342,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 167,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconTrustSecureCheckout style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          letterSpacing: "0.400px",
          color: "var(--color-action-primary)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.text1 ?? "SECURE CHECKOUT"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--color-text-muted)",
        flexShrink: 0,
      }}>{props.text2 ?? "Your payment is protected"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 342,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 167,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconTrustHelpfulSupport style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          letterSpacing: "0.400px",
          color: "var(--color-action-primary)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}>{props.text1 ?? "HELPFUL SUPPORT"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--color-text-muted)",
        flexShrink: 0,
      }}>{props.text2 ?? "Here when you need us"}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Free Shipping
    "type=free shipping": __body0,
    // figma: Type=30-Day Returns
    "type=30-day returns": __body1,
    // figma: Type=Secure Checkout
    "type=secure checkout": __body2,
    // figma: Type=Helpful Support
    "type=helpful support": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TrustItemPurchase;
