import * as React from 'react';
export interface TrustItemPurchaseProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "free shipping" | "30-day returns" | "secure checkout" | "helpful support";
  /** Text content; defaults to "FREE SHIPPING". */
  text1?: string;
  /** Text content; defaults to "On every US order". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TrustItemPurchase: React.FC<TrustItemPurchaseProps>;
export default TrustItemPurchase;
