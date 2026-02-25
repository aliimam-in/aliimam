/**
 * Auto-generated logo component: Flag Discount Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagDiscountOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagDiscountOutlineLogo = React.forwardRef<SVGSVGElement, FlagDiscountOutlineLogoProps>(
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
      <path d="M12.804 14.641a5.02 5.02 0 0 1 -.804 -.641a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8" />
  <path d="M5 21v-7" />
  <path d="M16 21l5 -5" />
  <path d="M21 21v.01" />
  <path d="M16 16v.01" />
    </svg>
  )
);

FlagDiscountOutlineLogo.displayName = "FlagDiscountOutlineLogo";

export const FlagDiscountOutlineLogoMetadata = {
  id: "flag-discount-outline",
  baseId: "flag-discount-outline",
  variant: "default",
  name: "Flag Discount Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagDiscountOutlineLogo;
