/**
 * Auto-generated logo component: Shopping Cart Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartDollarOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartDollarOutlineLogoProps>(
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
  <path d="M13 17h-7v-14h-2" />
  <path d="M6 5l14 1l-.575 4.022m-4.925 2.978h-8.5" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

ShoppingCartDollarOutlineLogo.displayName = "ShoppingCartDollarOutlineLogo";

export const ShoppingCartDollarOutlineLogoMetadata = {
  id: "shopping-cart-dollar-outline",
  baseId: "shopping-cart-dollar-outline",
  variant: "default",
  name: "Shopping Cart Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartDollarOutlineLogo;
