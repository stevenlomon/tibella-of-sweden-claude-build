import * as React from 'react';
export interface ProductCardGridMobileProps {
  className?: string;
  style?: React.CSSProperties;
  /** Product image URL; defaults to the design's sample product photo. */
  image?: string;
  title?: string;
  price?: string;
  category?: string;
}
export declare const ProductCardGridMobile: React.FC<ProductCardGridMobileProps>;
export default ProductCardGridMobile;
