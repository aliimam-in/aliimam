/**
 * Auto-generated logo component: Shoe Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoeOffOutlineLogo = React.forwardRef<SVGSVGElement, ShoeOffOutlineLogoProps>(
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
      <path d="M13.846 9.868l4.08 .972a4 4 0 0 1 3.074 3.89v2.27m-3 1h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2" />
  <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
  <path d="M10 12l.663 -1.327" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ShoeOffOutlineLogo.displayName = "ShoeOffOutlineLogo";

export const ShoeOffOutlineLogoMetadata = {
  id: "shoe-off-outline",
  baseId: "shoe-off-outline",
  variant: "default",
  name: "Shoe Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoeOffOutlineLogo;
