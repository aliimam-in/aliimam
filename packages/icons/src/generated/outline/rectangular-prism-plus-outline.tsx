/**
 * Auto-generated logo component: Rectangular Prism Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangularPrismPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangularPrismPlusOutlineLogo = React.forwardRef<SVGSVGElement, RectangularPrismPlusOutlineLogoProps>(
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
      <path d="M21 12.5v-3.509a1.98 1.98 0 0 0 -1 -1.717l-4 -2.008a2.016 2.016 0 0 0 -2 0l-10 5.007c-.619 .355 -1 1.01 -1 1.718v5.018c0 .709 .381 1.363 1 1.717l4 2.008a2.016 2.016 0 0 0 2 0l2.062 -1.032" />
  <path d="M9 21v-7.5" />
  <path d="M9 13.5l11.5 -5.5" />
  <path d="M3.5 11l5.5 2.5" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

RectangularPrismPlusOutlineLogo.displayName = "RectangularPrismPlusOutlineLogo";

export const RectangularPrismPlusOutlineLogoMetadata = {
  id: "rectangular-prism-plus-outline",
  baseId: "rectangular-prism-plus-outline",
  variant: "default",
  name: "Rectangular Prism Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangularPrismPlusOutlineLogo;
