import * as React from 'react';
export interface CollectionToolbarProps {
  className?: string;
  style?: React.CSSProperties;
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "Filter & Sort". */
  text1?: string;
  /** Text content; defaults to "69 products". */
  text2?: string;
}
export declare const CollectionToolbar: React.FC<CollectionToolbarProps>;
export default CollectionToolbar;
