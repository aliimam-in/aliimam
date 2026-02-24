/**
 * Auto-generated logo component: Shopping Cart (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartLogo = React.forwardRef<SVGSVGElement, ShoppingCartLogoProps>(
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
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  )
);

ShoppingCartLogo.displayName = "ShoppingCartLogo";

export const ShoppingCartLogoMetadata = {
  id: "shopping-cart",
  baseId: "shopping-cart",
  variant: "default",
  name: "Shopping Cart",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartLogo;
