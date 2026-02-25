/**
 * Auto-generated logo component: Brand Waze Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandWazeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandWazeOutlineLogo = React.forwardRef<SVGSVGElement, BrandWazeOutlineLogoProps>(
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
      <path d="M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62" />
  <path d="M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54" />
  <path d="M14 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 9h.01" />
  <path d="M11 9h.01" />
    </svg>
  )
);

BrandWazeOutlineLogo.displayName = "BrandWazeOutlineLogo";

export const BrandWazeOutlineLogoMetadata = {
  id: "brand-waze-outline",
  baseId: "brand-waze-outline",
  variant: "default",
  name: "Brand Waze Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandWazeOutlineLogo;
