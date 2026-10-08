import * as React from 'react';
export interface AccordionProductDetailsProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  /** Text content; defaults to "+". */
  text1?: string;
}
export declare const AccordionProductDetails: React.FC<AccordionProductDetailsProps>;
export default AccordionProductDetails;
