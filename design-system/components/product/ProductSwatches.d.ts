import * as React from 'react';
export interface ProductSwatchesProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "desktop" | "mobile" | "pdp";
}
export declare const ProductSwatches: React.FC<ProductSwatchesProps>;
export default ProductSwatches;
