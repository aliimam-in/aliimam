/**
 * Auto-generated logo component: Shopping Bag Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagCheckOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingBagCheckOutlineLogoProps>(
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
      <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248" />
  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

ShoppingBagCheckOutlineLogo.displayName = "ShoppingBagCheckOutlineLogo";

export const ShoppingBagCheckOutlineLogoMetadata = {
  id: "shopping-bag-check-outline",
  baseId: "shopping-bag-check-outline",
  variant: "default",
  name: "Shopping Bag Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagCheckOutlineLogo;
