/**
 * Auto-generated logo component: Shopping Cart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartOutlineLogoProps>(
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
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 17h-11v-14h-2" />
  <path d="M6 5l14 1l-1 7h-13" />
    </svg>
  )
);

ShoppingCartOutlineLogo.displayName = "ShoppingCartOutlineLogo";

export const ShoppingCartOutlineLogoMetadata = {
  id: "shopping-cart-outline",
  baseId: "shopping-cart-outline",
  variant: "default",
  name: "Shopping Cart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartOutlineLogo;
