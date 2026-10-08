import * as React from 'react';
/** @startingPoint section="Storefront" subtitle="FAQ section" viewport="700x400" */
export interface FAQSectionProps {
  className?: string;
  style?: React.CSSProperties;
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "CUSTOMER CARE". */
  text1?: string;
  /** Text content; defaults to "A few things you may be wondering". */
  text2?: string;
  /** Text content; defaults to "Everything you need to shop with confidence.". */
  text3?: string;
  /** Text content; defaults to "Still have a question?". */
  text4?: string;
}
export declare const FAQSection: React.FC<FAQSectionProps>;
export default FAQSection;
