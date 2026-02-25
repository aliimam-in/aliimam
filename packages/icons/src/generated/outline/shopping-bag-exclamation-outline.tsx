/**
 * Auto-generated logo component: Shopping Bag Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingBagExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingBagExclamationOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingBagExclamationOutlineLogoProps>(
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
      <path d="M15 21h-6.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.258 1.678" />
  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

ShoppingBagExclamationOutlineLogo.displayName = "ShoppingBagExclamationOutlineLogo";

export const ShoppingBagExclamationOutlineLogoMetadata = {
  id: "shopping-bag-exclamation-outline",
  baseId: "shopping-bag-exclamation-outline",
  variant: "default",
  name: "Shopping Bag Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingBagExclamationOutlineLogo;
