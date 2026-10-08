import * as React from 'react';
export interface NavigationMenuProps {
  className?: string;
  style?: React.CSSProperties;
  breakpoint?: "desktop" | "mobile";
  state?: "clothing open";
  /** Text content; defaults to "Clothing". */
  text1?: string;
  /** Text content; defaults to "Shoes". */
  text2?: string;
  /** Text content; defaults to "Home & Living". */
  text3?: string;
  /** Text content; defaults to "Gifts". */
  text4?: string;
}
export declare const NavigationMenu: React.FC<NavigationMenuProps>;
export default NavigationMenu;
