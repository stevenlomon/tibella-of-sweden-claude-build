import * as React from 'react';
export interface CartQuantitySelectorProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "−". */
  text1?: string;
  /** Text content; defaults to "1". */
  text2?: string;
  /** Text content; defaults to "+". */
  text3?: string;
}
export declare const CartQuantitySelector: React.FC<CartQuantitySelectorProps>;
export default CartQuantitySelector;
