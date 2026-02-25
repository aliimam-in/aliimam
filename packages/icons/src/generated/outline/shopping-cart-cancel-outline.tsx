/**
 * Auto-generated logo component: Shopping Cart Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartCancelOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartCancelOutlineLogoProps>(
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
  <path d="M6 5l14 1l-.857 5.998m-3.643 1.002h-9.5" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
    </svg>
  )
);

ShoppingCartCancelOutlineLogo.displayName = "ShoppingCartCancelOutlineLogo";

export const ShoppingCartCancelOutlineLogoMetadata = {
  id: "shopping-cart-cancel-outline",
  baseId: "shopping-cart-cancel-outline",
  variant: "default",
  name: "Shopping Cart Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartCancelOutlineLogo;
