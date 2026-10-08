import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** Button label. */
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  style2?: "primary" | "secondary";
  size?: "lg" | "standard";
  /** Text content; defaults to "SHOP NOW". */
  text1?: string;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
