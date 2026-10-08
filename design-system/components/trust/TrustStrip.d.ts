import * as React from 'react';
export interface TrustStripProps {
  className?: string;
  style?: React.CSSProperties;
  context?: "page" | "purchase" | "checkout";
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "FREE SHIPPING". */
  text1?: string;
  /** Text content; defaults to "On every US order". */
  text2?: string;
  /** Text content; defaults to "30-DAY RETURNS". */
  text3?: string;
  /** Text content; defaults to "Shop with confidence". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const TrustStrip: React.FC<TrustStripProps>;
export default TrustStrip;
