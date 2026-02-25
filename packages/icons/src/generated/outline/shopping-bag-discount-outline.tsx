/**
 * Auto-generated logo component: Shopping Bag Discount Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagDiscountOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagDiscountOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingBagDiscountOutlineLogoProps>(
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
      <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.416 2.7" />
  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
  <path d="M16 21l5 -5" />
  <path d="M21 21v.01" />
  <path d="M16 16v.01" />
    </svg>
  )
);

ShoppingBagDiscountOutlineLogo.displayName = "ShoppingBagDiscountOutlineLogo";

export const ShoppingBagDiscountOutlineLogoMetadata = {
  id: "shopping-bag-discount-outline",
  baseId: "shopping-bag-discount-outline",
  variant: "default",
  name: "Shopping Bag Discount Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagDiscountOutlineLogo;
