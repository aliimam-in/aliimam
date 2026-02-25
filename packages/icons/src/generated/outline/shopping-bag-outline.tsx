/**
 * Auto-generated logo component: Shopping Bag Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingBagOutlineLogoProps>(
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
      <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
    </svg>
  )
);

ShoppingBagOutlineLogo.displayName = "ShoppingBagOutlineLogo";

export const ShoppingBagOutlineLogoMetadata = {
  id: "shopping-bag-outline",
  baseId: "shopping-bag-outline",
  variant: "default",
  name: "Shopping Bag Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagOutlineLogo;
