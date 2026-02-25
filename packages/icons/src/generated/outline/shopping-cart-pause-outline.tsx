/**
 * Auto-generated logo component: Shopping Cart Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartPauseOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartPauseOutlineLogoProps>(
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
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

ShoppingCartPauseOutlineLogo.displayName = "ShoppingCartPauseOutlineLogo";

export const ShoppingCartPauseOutlineLogoMetadata = {
  id: "shopping-cart-pause-outline",
  baseId: "shopping-cart-pause-outline",
  variant: "default",
  name: "Shopping Cart Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartPauseOutlineLogo;
