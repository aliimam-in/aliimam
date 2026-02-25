/**
 * Auto-generated logo component: Shopping Cart Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartShareOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartShareOutlineLogoProps>(
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
  <path d="M6 5l14 1l-1 7h-13" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

ShoppingCartShareOutlineLogo.displayName = "ShoppingCartShareOutlineLogo";

export const ShoppingCartShareOutlineLogoMetadata = {
  id: "shopping-cart-share-outline",
  baseId: "shopping-cart-share-outline",
  variant: "default",
  name: "Shopping Cart Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartShareOutlineLogo;
