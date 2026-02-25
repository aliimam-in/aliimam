/**
 * Auto-generated logo component: Brand Days Counter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDaysCounterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDaysCounterOutlineLogo = React.forwardRef<SVGSVGElement, BrandDaysCounterOutlineLogoProps>(
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
      <path d="M20.779 10.007a9 9 0 1 0 -10.77 10.772" />
  <path d="M13 21h8v-7" />
  <path d="M12 8v4l3 3" />
    </svg>
  )
);

BrandDaysCounterOutlineLogo.displayName = "BrandDaysCounterOutlineLogo";

export const BrandDaysCounterOutlineLogoMetadata = {
  id: "brand-days-counter-outline",
  baseId: "brand-days-counter-outline",
  variant: "default",
  name: "Brand Days Counter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDaysCounterOutlineLogo;
