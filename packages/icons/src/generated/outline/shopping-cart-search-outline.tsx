/**
 * Auto-generated logo component: Shopping Cart Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartSearchOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartSearchOutlineLogoProps>(
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
  <path d="M11 17h-5v-14h-2" />
  <path d="M6 5l14 1l-.718 5.023m-6.282 1.977h-7" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

ShoppingCartSearchOutlineLogo.displayName = "ShoppingCartSearchOutlineLogo";

export const ShoppingCartSearchOutlineLogoMetadata = {
  id: "shopping-cart-search-outline",
  baseId: "shopping-cart-search-outline",
  variant: "default",
  name: "Shopping Cart Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartSearchOutlineLogo;
