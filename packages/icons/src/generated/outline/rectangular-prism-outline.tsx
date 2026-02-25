/**
 * Auto-generated logo component: Rectangular Prism Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangularPrismOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangularPrismOutlineLogo = React.forwardRef<SVGSVGElement, RectangularPrismOutlineLogoProps>(
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
      <path d="M21 14.008v-5.018a1.98 1.98 0 0 0 -1 -1.717l-4 -2.008a2.016 2.016 0 0 0 -2 0l-10 5.008c-.619 .355 -1 1.01 -1 1.718v5.018c0 .709 .381 1.363 1 1.717l4 2.008a2.016 2.016 0 0 0 2 0l10 -5.008c.619 -.355 1 -1.01 1 -1.718" />
  <path d="M9 21v-7.5" />
  <path d="M9 13.5l11.5 -5.5" />
  <path d="M3.5 11l5.5 2.5" />
    </svg>
  )
);

RectangularPrismOutlineLogo.displayName = "RectangularPrismOutlineLogo";

export const RectangularPrismOutlineLogoMetadata = {
  id: "rectangular-prism-outline",
  baseId: "rectangular-prism-outline",
  variant: "default",
  name: "Rectangular Prism Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangularPrismOutlineLogo;
