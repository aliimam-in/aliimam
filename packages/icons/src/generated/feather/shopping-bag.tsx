/**
 * Auto-generated logo component: Shopping Bag (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagLogo = React.forwardRef<SVGSVGElement, ShoppingBagLogoProps>(
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
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  )
);

ShoppingBagLogo.displayName = "ShoppingBagLogo";

export const ShoppingBagLogoMetadata = {
  id: "shopping-bag",
  baseId: "shopping-bag",
  variant: "default",
  name: "Shopping Bag",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagLogo;
