/**
 * Auto-generated logo component: Shoe Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoeOutlineLogo = React.forwardRef<SVGSVGElement, ShoeOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1" />
  <path d="M14 13l1 -2" />
  <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
  <path d="M10 12l1.5 -3" />
    </svg>
  )
);

ShoeOutlineLogo.displayName = "ShoeOutlineLogo";

export const ShoeOutlineLogoMetadata = {
  id: "shoe-outline",
  baseId: "shoe-outline",
  variant: "default",
  name: "Shoe Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoeOutlineLogo;
