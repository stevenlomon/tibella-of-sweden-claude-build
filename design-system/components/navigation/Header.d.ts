import * as React from 'react';
/** @startingPoint section="Storefront" subtitle="Site header" viewport="700x400" */
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "desktop" | "mobile" | "mobile drawer";
  /** Text content; defaults to "Clothing". */
  text1?: string;
  /** Text content; defaults to "Shoes". */
  text2?: string;
  /** Text content; defaults to "Home & Living". */
  text3?: string;
  /** Text content; defaults to "Gifts". */
  text4?: string;
}
export declare const Header: React.FC<HeaderProps>;
export default Header;
