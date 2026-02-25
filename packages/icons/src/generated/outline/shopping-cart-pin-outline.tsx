/**
 * Auto-generated logo component: Shopping Cart Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartPinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartPinOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartPinOutlineLogoProps>(
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
  <path d="M12 17h-6v-14h-2" />
  <path d="M6 5l14 1l-.716 5.011m-5.284 1.989h-8" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
    </svg>
  )
);

ShoppingCartPinOutlineLogo.displayName = "ShoppingCartPinOutlineLogo";

export const ShoppingCartPinOutlineLogoMetadata = {
  id: "shopping-cart-pin-outline",
  baseId: "shopping-cart-pin-outline",
  variant: "default",
  name: "Shopping Cart Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartPinOutlineLogo;
