import * as React from 'react';
export interface NavigationSharedCategorySeasonalProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Christmas Décor". */
  text1?: string;
  /** Text content; defaults to "Seasonal Gifts". */
  text2?: string;
  /** Text content; defaults to "Craft Kits". */
  text3?: string;
}
export declare const NavigationSharedCategorySeasonal: React.FC<NavigationSharedCategorySeasonalProps>;
export default NavigationSharedCategorySeasonal;
