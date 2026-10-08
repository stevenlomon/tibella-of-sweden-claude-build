import * as React from 'react';
export interface CollectionFilterSortDrawerProps {
  className?: string;
  style?: React.CSSProperties;
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "Filter & Sort". */
  text1?: string;
  /** Text content; defaults to "Shoes · 69 Products". */
  text2?: string;
}
export declare const CollectionFilterSortDrawer: React.FC<CollectionFilterSortDrawerProps>;
export default CollectionFilterSortDrawer;
