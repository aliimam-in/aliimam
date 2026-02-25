/**
 * Auto-generated logo component: Shopping Cart Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartUpOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartUpOutlineLogoProps>(
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
  <path d="M6 5l14 1l-.854 5.977m-2.646 1.023h-10.5" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

ShoppingCartUpOutlineLogo.displayName = "ShoppingCartUpOutlineLogo";

export const ShoppingCartUpOutlineLogoMetadata = {
  id: "shopping-cart-up-outline",
  baseId: "shopping-cart-up-outline",
  variant: "default",
  name: "Shopping Cart Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartUpOutlineLogo;
