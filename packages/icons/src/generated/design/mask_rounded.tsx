/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MaskRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MaskRounded = React.forwardRef<SVGSVGElement, MaskRoundedProps>(
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
      <path d="M19.07 4.93L4.92999 19.07C3.11999 17.26 2 14.76 2 12C2 6.48 6.48 2 12 2C14.76 2 17.26 3.12 19.07 4.93Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12C22 17.52 17.52 22 12 22C9.24 22 6.73999 20.88 4.92999 19.07L19.07 4.92999C20.88 6.73999 22 9.23999 22 12Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.76001 16.24L13.41 21.9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.29 12.71L17.87 19.28"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.83 9.16998L21.12 15.47"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MaskRounded.displayName = "MaskRounded";
export const MaskRoundedMetadata = { 
  id: "mask_rounded", 
  baseId: "mask", 
  variant: "rounded", 
  name: "Mask", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MaskRounded;
