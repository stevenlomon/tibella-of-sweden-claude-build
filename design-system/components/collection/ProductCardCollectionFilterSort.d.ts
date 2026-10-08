import * as React from 'react';
export interface ProductCardCollectionFilterSortProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  price?: string;
  category?: string;
  /** Text content; defaults to "Sort By". */
  text1?: string;
  /** Text content; defaults to "Featured". */
  text2?: string;
  /** Text content; defaults to "Newest". */
  text3?: string;
  /** Text content; defaults to "Price: Low to High". */
  text4?: string;
}
export declare const ProductCardCollectionFilterSort: React.FC<ProductCardCollectionFilterSortProps>;
export default ProductCardCollectionFilterSort;
