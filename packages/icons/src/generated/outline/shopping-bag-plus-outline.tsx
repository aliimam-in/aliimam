/**
 * Auto-generated logo component: Shopping Bag Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagPlusOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingBagPlusOutlineLogoProps>(
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
      <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
    </svg>
  )
);

ShoppingBagPlusOutlineLogo.displayName = "ShoppingBagPlusOutlineLogo";

export const ShoppingBagPlusOutlineLogoMetadata = {
  id: "shopping-bag-plus-outline",
  baseId: "shopping-bag-plus-outline",
  variant: "default",
  name: "Shopping Bag Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagPlusOutlineLogo;
