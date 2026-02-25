/**
 * Auto-generated logo component: Shopping Bag Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagMinusOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingBagMinusOutlineLogoProps>(
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
      <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.73 4.744" />
  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
  <path d="M16 19h6" />
    </svg>
  )
);

ShoppingBagMinusOutlineLogo.displayName = "ShoppingBagMinusOutlineLogo";

export const ShoppingBagMinusOutlineLogoMetadata = {
  id: "shopping-bag-minus-outline",
  baseId: "shopping-bag-minus-outline",
  variant: "default",
  name: "Shopping Bag Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagMinusOutlineLogo;
