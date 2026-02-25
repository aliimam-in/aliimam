/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrandOperaFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BrandOperaFilled = React.forwardRef<SVGSVGElement, BrandOperaFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66c-2.285 0 -3.915 2.619 -3.997 5.752l-.003 .248c0 3.242 1.655 6 4 6s4 -2.758 4 -6s-1.655 -6 -4 -6" />
    </svg>
  )
);
BrandOperaFilled.displayName = "BrandOperaFilled";
export const BrandOperaFilledMetadata = { 
  id: "brand-opera_filled", 
  baseId: "brand-opera", 
  variant: "filled", 
  name: "Brand Opera", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BrandOperaFilled;
