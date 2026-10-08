import * as React from 'react';
export interface AccordionFAQProps {
  className?: string;
  style?: React.CSSProperties;
  breakpoint?: "desktop" | "mobile";
  state?: "closed" | "open";
  /** Text content; defaults to "When will my order arrive?". */
  text1?: string;
  /** Text content; defaults to "Orders are processed within 1–2 business days. Delivery estimates are shown at checkout and included in your confirmation email. Once your order ships, we’ll send a tracking link so you can follow it every step of the way.". */
  text2?: string;
  /** Text content; defaults to "Delivery estimates are shown at checkout and included in your confirmation email.". */
  text3?: string;
}
export declare const AccordionFAQ: React.FC<AccordionFAQProps>;
export default AccordionFAQ;
