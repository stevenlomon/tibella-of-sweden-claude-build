import * as React from 'react';
export interface NavigationSharedCategoryClothingProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Knitwear". */
  text1?: string;
  /** Text content; defaults to "Dresses". */
  text2?: string;
  /** Text content; defaults to "Outerwear". */
  text3?: string;
  /** Text content; defaults to "Bottoms". */
  text4?: string;
}
export declare const NavigationSharedCategoryClothing: React.FC<NavigationSharedCategoryClothingProps>;
export default NavigationSharedCategoryClothing;
