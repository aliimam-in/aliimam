/**
 * Auto-generated logo component: Shopping Bag Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagSearchOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingBagSearchOutlineLogoProps>(
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
      <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.117 .761" />
  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

ShoppingBagSearchOutlineLogo.displayName = "ShoppingBagSearchOutlineLogo";

export const ShoppingBagSearchOutlineLogoMetadata = {
  id: "shopping-bag-search-outline",
  baseId: "shopping-bag-search-outline",
  variant: "default",
  name: "Shopping Bag Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagSearchOutlineLogo;
