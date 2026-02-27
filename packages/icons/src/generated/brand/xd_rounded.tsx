/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface XdRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const XdRounded = React.forwardRef<SVGSVGElement, XdRoundedProps>(
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
      <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#17191C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9999 8.5V15.6H16.1999C15.1999 15.6 14.3999 14.8 14.3999 13.8C14.3999 12.8 15.1999 12 16.1999 12H17.9999" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8.5L11.7 15.5" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.7 8.5L6 15.5" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
XdRounded.displayName = "XdRounded";
export const XdRoundedMetadata = { 
  id: "xd_rounded", 
  baseId: "xd", 
  variant: "rounded", 
  name: "Xd", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default XdRounded;
