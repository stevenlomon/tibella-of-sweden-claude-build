import { AccordionFAQ } from './AccordionFAQ.jsx';

// figma node: 428:2248 FAQ Section (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "breakpoint=" + __venc(p.breakpoint);

export function FAQSection(_p = {}) {
  const props = { ..._p, breakpoint: _p.breakpoint ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 880,
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "0.100em",
          color: "rgb(106,52,70)",
          textTransform: "uppercase",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "CUSTOMER CARE"}</span>
        <span style={{
          position: "relative",
          width: 720,
          fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
          fontWeight: 600,
          fontSize: 40,
          textAlign: "center",
          lineHeight: "44px",
          color: "rgb(35,66,56)",
          flexShrink: 0,
        }}>{props.text2 ?? "A few things you may be wondering"}</span>
        <span style={{
          position: "relative",
          width: 620,
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "24px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>{props.text3 ?? "Everything you need to shop with confidence."}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <AccordionFAQ
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          breakpoint={"desktop"}
          state={"open"}
        />
        <AccordionFAQ
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"Do you offer free shipping?"}
          breakpoint={"desktop"}
          state={"closed"}
        />
        <AccordionFAQ
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"What is your return policy?"}
          breakpoint={"desktop"}
          state={"closed"}
        />
        <AccordionFAQ
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"How can I track my order?"}
          breakpoint={"desktop"}
          state={"closed"}
        />
        <AccordionFAQ
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"How do I choose the right size?"}
          breakpoint={"desktop"}
          state={"closed"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(41,38,36)",
          flexShrink: 0,
        }}>{props.text4 ?? "Still have a question?"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          letterSpacing: "0.400px",
          color: "rgb(106,52,70)",
          flexShrink: 0,
        }}>Contact us</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 571,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "40px 24px 48px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        letterSpacing: "0.800px",
        color: "var(--color-action-primary)",
        textTransform: "uppercase",
        flexShrink: 0,
      }}>{props.text1 ?? "CUSTOMER CARE"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
        fontWeight: 600,
        fontSize: 28,
        lineHeight: "33px",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "A few things you may be wondering"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "Everything you need to shop with confidence."}</span>
      <AccordionFAQ
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text3={"Orders are processed within 1–2 business days. Delivery estimates are shown at checkout and included in your confirmation email. Once your order ships, we’ll send a tracking link so you can follow it every step of the way."}
        breakpoint={"mobile"}
        state={"open"}
      />
      <AccordionFAQ
        style={{
          position: "relative",
          height: 54,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        breakpoint={"mobile"}
        state={"closed"}
      />
      <AccordionFAQ
        style={{
          position: "relative",
          height: 54,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"What is your return policy?"}
        breakpoint={"mobile"}
        state={"closed"}
      />
      <AccordionFAQ
        style={{
          position: "relative",
          height: 54,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"How can I track my order?"}
        breakpoint={"mobile"}
        state={"closed"}
      />
      <AccordionFAQ
        style={{
          position: "relative",
          height: 54,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"How do I choose the right size?"}
        breakpoint={"mobile"}
        state={"closed"}
      />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "Still have a question?  Contact us"}</span>
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
export default FAQSection;
