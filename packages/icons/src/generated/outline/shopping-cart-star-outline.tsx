/**
 * Auto-generated logo component: Shopping Cart Star Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartStarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartStarOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartStarOutlineLogoProps>(
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
  <path d="M9.5 17h-3.5v-14h-2" />
  <path d="M6 5l14 1l-.615 4.302m-6.885 2.698h-6.5" />
  <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" />
    </svg>
  )
);

ShoppingCartStarOutlineLogo.displayName = "ShoppingCartStarOutlineLogo";

export const ShoppingCartStarOutlineLogoMetadata = {
  id: "shopping-cart-star-outline",
  baseId: "shopping-cart-star-outline",
  variant: "default",
  name: "Shopping Cart Star Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartStarOutlineLogo;
