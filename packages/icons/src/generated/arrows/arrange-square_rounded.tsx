/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrangeSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrangeSquareRounded = React.forwardRef<SVGSVGElement, ArrangeSquareRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.1501 13.82L14.1101 16.86"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.8501 13.82H17.1501"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.8501 10.18L9.8901 7.14"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.1501 10.18H6.8501"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrangeSquareRounded.displayName = "ArrangeSquareRounded";
export const ArrangeSquareRoundedMetadata = { 
  id: "arrange-square_rounded", 
  baseId: "arrange-square", 
  variant: "rounded", 
  name: "Arrange Square", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrangeSquareRounded;
