import * as React from 'react';
export interface NavigationSharedCategoryShoesProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "All Shoes". */
  text1?: string;
  /** Text content; defaults to "Boots". */
  text2?: string;
  /** Text content; defaults to "Comfort & Orthopedic". */
  text3?: string;
  /** Text content; defaults to "Wide-Fit Shoes". */
  text4?: string;
}
export declare const NavigationSharedCategoryShoes: React.FC<NavigationSharedCategoryShoesProps>;
export default NavigationSharedCategoryShoes;
