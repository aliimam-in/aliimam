/**
 * Auto-generated logo component: Shopping Bag Edit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagEditOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagEditOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingBagEditOutlineLogoProps>(
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
      <path d="M11 21h-2.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.109 .707" />
  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
  <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" />
    </svg>
  )
);

ShoppingBagEditOutlineLogo.displayName = "ShoppingBagEditOutlineLogo";

export const ShoppingBagEditOutlineLogoMetadata = {
  id: "shopping-bag-edit-outline",
  baseId: "shopping-bag-edit-outline",
  variant: "default",
  name: "Shopping Bag Edit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagEditOutlineLogo;
