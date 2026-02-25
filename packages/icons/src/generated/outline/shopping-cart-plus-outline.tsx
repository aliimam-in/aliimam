/**
 * Auto-generated logo component: Shopping Cart Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartPlusOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartPlusOutlineLogoProps>(
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
  <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

ShoppingCartPlusOutlineLogo.displayName = "ShoppingCartPlusOutlineLogo";

export const ShoppingCartPlusOutlineLogoMetadata = {
  id: "shopping-cart-plus-outline",
  baseId: "shopping-cart-plus-outline",
  variant: "default",
  name: "Shopping Cart Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartPlusOutlineLogo;
