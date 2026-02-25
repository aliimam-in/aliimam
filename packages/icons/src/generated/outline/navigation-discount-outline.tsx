/**
 * Auto-generated logo component: Navigation Discount Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationDiscountOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationDiscountOutlineLogo = React.forwardRef<SVGSVGElement, NavigationDiscountOutlineLogoProps>(
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
      <path d="M16.43 12.603l-4.43 -9.603l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463l1.272 .431" />
  <path d="M16 21l5 -5" />
  <path d="M21 21v.01" />
  <path d="M16 16v.01" />
    </svg>
  )
);

NavigationDiscountOutlineLogo.displayName = "NavigationDiscountOutlineLogo";

export const NavigationDiscountOutlineLogoMetadata = {
  id: "navigation-discount-outline",
  baseId: "navigation-discount-outline",
  variant: "default",
  name: "Navigation Discount Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationDiscountOutlineLogo;
