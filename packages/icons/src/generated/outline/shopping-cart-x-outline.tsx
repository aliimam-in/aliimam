/**
 * Auto-generated logo component: Shopping Cart X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartXOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartXOutlineLogoProps>(
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
  <path d="M6 5l14 1l-1 7h-13" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

ShoppingCartXOutlineLogo.displayName = "ShoppingCartXOutlineLogo";

export const ShoppingCartXOutlineLogoMetadata = {
  id: "shopping-cart-x-outline",
  baseId: "shopping-cart-x-outline",
  variant: "default",
  name: "Shopping Cart X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartXOutlineLogo;
