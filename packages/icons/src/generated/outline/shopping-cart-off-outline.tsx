/**
 * Auto-generated logo component: Shopping Cart Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartOffOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartOffOutlineLogoProps>(
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
  <path d="M17 17a2 2 0 1 0 2 2" />
  <path d="M17 17h-11v-11" />
  <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ShoppingCartOffOutlineLogo.displayName = "ShoppingCartOffOutlineLogo";

export const ShoppingCartOffOutlineLogoMetadata = {
  id: "shopping-cart-off-outline",
  baseId: "shopping-cart-off-outline",
  variant: "default",
  name: "Shopping Cart Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartOffOutlineLogo;
