/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface XiaomiRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const XiaomiRounded = React.forwardRef<SVGSVGElement, XiaomiRoundedProps>(
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
      <path d="M7.5 15V9H11.5C12.6 9 13.5 9.9 13.5 11V15"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 15V12"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 15V9"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10"/>
    </svg>
  )
);
XiaomiRounded.displayName = "XiaomiRounded";
export const XiaomiRoundedMetadata = { 
  id: "xiaomi_rounded", 
  baseId: "xiaomi", 
  variant: "rounded", 
  name: "Xiaomi", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default XiaomiRounded;
