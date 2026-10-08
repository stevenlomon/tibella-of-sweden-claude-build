import * as React from 'react';
export interface CarouselControlsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "desktop" | "mobile";
}
export declare const CarouselControls: React.FC<CarouselControlsProps>;
export default CarouselControls;
