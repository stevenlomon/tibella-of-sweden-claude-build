import * as React from 'react';
export interface NavigationSharedCategoryGiftsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Thoughtful Finds". */
  text1?: string;
  /** Text content; defaults to "Host Gifts". */
  text2?: string;
  /** Text content; defaults to "Gifts Under $50". */
  text3?: string;
  /** Text content; defaults to "Craft Items". */
  text4?: string;
}
export declare const NavigationSharedCategoryGifts: React.FC<NavigationSharedCategoryGiftsProps>;
export default NavigationSharedCategoryGifts;
