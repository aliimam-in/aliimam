/**
 * Auto-generated logo component: Shopping Cart Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartBoltOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartBoltOutlineLogoProps>(
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
  <path d="M13.5 17h-7.5v-14h-2" />
  <path d="M6 5l14 1l-.858 6.004m-2.642 .996h-10.5" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

ShoppingCartBoltOutlineLogo.displayName = "ShoppingCartBoltOutlineLogo";

export const ShoppingCartBoltOutlineLogoMetadata = {
  id: "shopping-cart-bolt-outline",
  baseId: "shopping-cart-bolt-outline",
  variant: "default",
  name: "Shopping Cart Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartBoltOutlineLogo;
