/**
 * Auto-generated logo component: Shopping Cart (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixShoppingCartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixShoppingCartLogo = React.forwardRef<SVGSVGElement, MixShoppingCartLogoProps>(
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
      <circle cx="8" cy="21" r="1" />
  <circle cx="19" cy="21" r="1" />
  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
);

MixShoppingCartLogo.displayName = "MixShoppingCartLogo";

export const MixShoppingCartLogoMetadata = {
  id: "shopping-cart",
  baseId: "shopping-cart",
  variant: "default",
  name: "Shopping Cart",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixShoppingCartLogo;
