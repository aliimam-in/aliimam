/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BagCrossRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BagCrossRounded = React.forwardRef<SVGSVGElement, BagCrossRoundedProps>(
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
      <path d="M13.39 17.36L10.64 14.61"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.36 14.64L10.61 17.39"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.81 2L5.19 5.63"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.19 2L18.81 5.63"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 7.85001C2 6.00001 2.99 5.85001 4.22 5.85001H19.78C21.01 5.85001 22 6.00001 22 7.85001C22 10 21.01 9.85001 19.78 9.85001H4.22C2.99 9.85001 2 10 2 7.85001Z"  />
<path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"   strokeLinecap="round"/>
    </svg>
  )
);
BagCrossRounded.displayName = "BagCrossRounded";
export const BagCrossRoundedMetadata = { 
  id: "bag-cross_rounded", 
  baseId: "bag-cross", 
  variant: "rounded", 
  name: "Bag Cross", 
  category: "commerce", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BagCrossRounded;
