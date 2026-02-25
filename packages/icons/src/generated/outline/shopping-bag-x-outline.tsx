/**
 * Auto-generated logo component: Shopping Bag X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagXOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingBagXOutlineLogoProps>(
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
      <path d="M13 21h-4.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.506 3.287" />
  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

ShoppingBagXOutlineLogo.displayName = "ShoppingBagXOutlineLogo";

export const ShoppingBagXOutlineLogoMetadata = {
  id: "shopping-bag-x-outline",
  baseId: "shopping-bag-x-outline",
  variant: "default",
  name: "Shopping Bag X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagXOutlineLogo;
