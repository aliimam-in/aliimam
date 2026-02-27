/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VuesaxRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VuesaxRounded = React.forwardRef<SVGSVGElement, VuesaxRoundedProps>(
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
      <path d="M21 8L12 22L2.95996 8"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 4H6L12 13L18 4H21L12 18L3 4Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3L12 9L16 3L13.2 4V2H10.8V4L8 3Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VuesaxRounded.displayName = "VuesaxRounded";
export const VuesaxRoundedMetadata = { 
  id: "vuesax_rounded", 
  baseId: "vuesax", 
  variant: "rounded", 
  name: "Vuesax", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VuesaxRounded;
