/**
 * Auto-generated logo component: Discount Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiscountOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiscountOffOutlineLogo = React.forwardRef<SVGSVGElement, DiscountOffOutlineLogoProps>(
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
      <path d="M9 15l3 -3m2 -2l1 -1" />
  <path d="M9.148 9.145a.498 .498 0 0 0 .352 .855a.5 .5 0 0 0 .35 -.142" />
  <path d="M14.148 14.145a.498 .498 0 0 0 .352 .855a.5 .5 0 0 0 .35 -.142" />
  <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DiscountOffOutlineLogo.displayName = "DiscountOffOutlineLogo";

export const DiscountOffOutlineLogoMetadata = {
  id: "discount-off-outline",
  baseId: "discount-off-outline",
  variant: "default",
  name: "Discount Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiscountOffOutlineLogo;
