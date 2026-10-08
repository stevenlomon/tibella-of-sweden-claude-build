import * as React from 'react';
/** @startingPoint section="Storefront" subtitle="Slide-out cart" viewport="700x400" */
export interface CartDrawerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Product image URL; defaults to the design's sample product photo. */
  image?: string;
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "Your cart  ·  1 item". */
  text1?: string;
  /** Text content; defaults to "FREE SHIPPING ON ALL US ORDERS". */
  text2?: string;
  /** Text content; defaults to "Alder ribbed knit coat with denim panels". */
  text3?: string;
  /** Text content; defaults to "Cream  /  M". */
  text4?: string;
}
export declare const CartDrawer: React.FC<CartDrawerProps>;
export default CartDrawer;
