import * as React from 'react';
/** @startingPoint section="Storefront" subtitle="Product card (editorial / grid)" viewport="700x400" */
export interface ProductCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Product image URL; defaults to the design's sample product photo. */
  image?: string;
  title?: string;
  usage?: "editorial" | "grid";
  price?: string;
  breakpoint?: "desktop";
  category?: string;
  /** Text content; defaults to "OUTERWEAR". */
  text1?: string;
  /** Text content; defaults to "Alder ribbed knit coat". */
  text2?: string;
  /** Text content; defaults to "$68.00". */
  text3?: string;
}
export declare const ProductCard: React.FC<ProductCardProps>;
export default ProductCard;
