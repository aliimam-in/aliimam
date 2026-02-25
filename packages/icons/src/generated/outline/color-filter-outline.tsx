/**
 * Auto-generated logo component: Color Filter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColorFilterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColorFilterOutlineLogo = React.forwardRef<SVGSVGElement, ColorFilterOutlineLogoProps>(
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
      <path d="M13.58 13.79c.27 .68 .42 1.43 .42 2.21c0 1.77 -.77 3.37 -2 4.46a5.93 5.93 0 0 1 -4 1.54c-3.31 0 -6 -2.69 -6 -6c0 -2.76 1.88 -5.1 4.42 -5.79" />
  <path d="M17.58 10.21c2.54 .69 4.42 3.03 4.42 5.79c0 3.31 -2.69 6 -6 6a5.93 5.93 0 0 1 -4 -1.54" />
  <path d="M6 8a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    </svg>
  )
);

ColorFilterOutlineLogo.displayName = "ColorFilterOutlineLogo";

export const ColorFilterOutlineLogoMetadata = {
  id: "color-filter-outline",
  baseId: "color-filter-outline",
  variant: "default",
  name: "Color Filter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColorFilterOutlineLogo;
