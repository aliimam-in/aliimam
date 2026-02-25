/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BounceLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BounceLeftFilled = React.forwardRef<SVGSVGElement, BounceLeftFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M8.486 11.143a1 1 0 0 1 1.371 .343c1.045 1.74 1.83 3.443 2.392 5.237l.172 .581l.092 -.13c2.093 -2.921 4.48 -3.653 7.565 -2.7l.238 .077a1 1 0 1 1 -.632 1.898c-2.932 -.978 -4.73 -.122 -6.79 3.998c-.433 .866 -1.721 .673 -1.88 -.283c-.46 -2.76 -1.369 -5.145 -2.871 -7.65a1 1 0 0 1 .343 -1.371z" />
  <path d="M6 4a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
    </svg>
  )
);
BounceLeftFilled.displayName = "BounceLeftFilled";
export const BounceLeftFilledMetadata = { 
  id: "bounce-left_filled", 
  baseId: "bounce-left", 
  variant: "filled", 
  name: "Bounce Left", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BounceLeftFilled;
