/**
 * Auto-generated logo component: Shopping Cart Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartDownOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartDownOutlineLogoProps>(
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
  <path d="M6 5l14 1l-.859 6.011m-2.641 .989h-10.5" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
    </svg>
  )
);

ShoppingCartDownOutlineLogo.displayName = "ShoppingCartDownOutlineLogo";

export const ShoppingCartDownOutlineLogoMetadata = {
  id: "shopping-cart-down-outline",
  baseId: "shopping-cart-down-outline",
  variant: "default",
  name: "Shopping Cart Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartDownOutlineLogo;
