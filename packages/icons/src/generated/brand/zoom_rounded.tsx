/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZoomRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZoomRounded = React.forwardRef<SVGSVGElement, ZoomRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M6 9.69999V12.5C6 14 7.3 15.3 8.8 15.3H12.5C13 15.3 13.4 14.9 13.4 14.4V11.6C13.4 10.1 12.2 8.79999 10.6 8.79999H6.9C6.4 8.79999 6 9.19999 6 9.69999Z"   strokeMiterlimit="10"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18 9.20001V14.8L15.2 12.9V11.1L18 9.20001Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10"/>
    </svg>
  )
);
ZoomRounded.displayName = "ZoomRounded";
export const ZoomRoundedMetadata = { 
  id: "zoom_rounded", 
  baseId: "zoom", 
  variant: "rounded", 
  name: "Zoom", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZoomRounded;
