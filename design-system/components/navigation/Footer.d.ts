import * as React from 'react';
export interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "Dove & Thistle". */
  text1?: string;
  /** Text content; defaults to "Thoughtful style, useful comforts and meaningful gifts, chosen to make the everyday feel a little more considered.". */
  text2?: string;
  /** Text content; defaults to "INSTAGRAM". */
  text3?: string;
  /** Text content; defaults to "SHOP". */
  text4?: string;
}
export declare const Footer: React.FC<FooterProps>;
export default Footer;
