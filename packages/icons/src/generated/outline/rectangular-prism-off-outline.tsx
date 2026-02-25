/**
 * Auto-generated logo component: Rectangular Prism Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangularPrismOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangularPrismOffOutlineLogo = React.forwardRef<SVGSVGElement, RectangularPrismOffOutlineLogoProps>(
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
      <path d="M8.18 8.18l-4.18 2.093c-.619 .355 -1 1.01 -1 1.718v5.018c0 .709 .381 1.363 1 1.717l4 2.008a2.016 2.016 0 0 0 2 0l7.146 -3.578m2.67 -1.337l.184 -.093c.619 -.355 1 -1.01 1 -1.718v-5.018a1.98 1.98 0 0 0 -1 -1.717l-4 -2.008a2.016 2.016 0 0 0 -2 0l-3.146 1.575" />
  <path d="M9 21v-7.5" />
  <path d="M9 13.5l3.048 -1.458m2.71 -1.296l5.742 -2.746" />
  <path d="M3.5 11l5.5 2.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RectangularPrismOffOutlineLogo.displayName = "RectangularPrismOffOutlineLogo";

export const RectangularPrismOffOutlineLogoMetadata = {
  id: "rectangular-prism-off-outline",
  baseId: "rectangular-prism-off-outline",
  variant: "default",
  name: "Rectangular Prism Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangularPrismOffOutlineLogo;
