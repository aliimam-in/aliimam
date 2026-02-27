/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrangeCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrangeCircleRounded = React.forwardRef<SVGSVGElement, ArrangeCircleRoundedProps>(
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
      <path d="M13.8201 6.85001L16.86 9.89001"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.8201 17.15V6.85001"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1801 17.15L7.14014 14.11"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1802 6.85001V17.15"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrangeCircleRounded.displayName = "ArrangeCircleRounded";
export const ArrangeCircleRoundedMetadata = { 
  id: "arrange-circle_rounded", 
  baseId: "arrange-circle", 
  variant: "rounded", 
  name: "Arrange Circle", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrangeCircleRounded;
