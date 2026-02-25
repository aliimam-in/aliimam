/**
 * Auto-generated logo component: Shopping Cart Discount Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartDiscountOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartDiscountOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartDiscountOutlineLogoProps>(
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
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M12.5 17h-6.5v-14h-2" />
  <path d="M6 5l14 1l-.859 6.011m-6.141 .989h-7" />
  <path d="M16 21l5 -5" />
  <path d="M21 21v.01" />
  <path d="M16 16v.01" />
    </svg>
  )
);

ShoppingCartDiscountOutlineLogo.displayName = "ShoppingCartDiscountOutlineLogo";

export const ShoppingCartDiscountOutlineLogoMetadata = {
  id: "shopping-cart-discount-outline",
  baseId: "shopping-cart-discount-outline",
  variant: "default",
  name: "Shopping Cart Discount Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartDiscountOutlineLogo;
