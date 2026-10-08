import * as React from 'react';
export interface AnnouncementBarProps {
  className?: string;
  style?: React.CSSProperties;
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "FREE SHIPPING ON ALL US ORDERS". */
  text1?: string;
}
export declare const AnnouncementBar: React.FC<AnnouncementBarProps>;
export default AnnouncementBar;
