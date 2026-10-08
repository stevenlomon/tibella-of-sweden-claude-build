import * as React from 'react';
export interface ProductCardSliderMobileProps {
  className?: string;
  style?: React.CSSProperties;
  /** Product image URL; defaults to the design's sample product photo. */
  image?: string;
  title?: string;
  price?: string;
  category?: string;
  /** Text content; defaults to "OUTERWEAR". */
  text1?: string;
  /** Text content; defaults to "Alder ribbed knit coat". */
  text2?: string;
  /** Text content; defaults to "$68.00". */
  text3?: string;
}
export declare const ProductCardSliderMobile: React.FC<ProductCardSliderMobileProps>;
export default ProductCardSliderMobile;
