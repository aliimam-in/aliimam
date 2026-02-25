/**
 * Auto-generated logo component: Shopping Cart Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartHeartOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartHeartOutlineLogoProps>(
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
  <path d="M10 17h-4v-14h-2" />
  <path d="M6 5l14 1l-.717 5.016m-7.783 1.984h-5.5" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
    </svg>
  )
);

ShoppingCartHeartOutlineLogo.displayName = "ShoppingCartHeartOutlineLogo";

export const ShoppingCartHeartOutlineLogoMetadata = {
  id: "shopping-cart-heart-outline",
  baseId: "shopping-cart-heart-outline",
  variant: "default",
  name: "Shopping Cart Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartHeartOutlineLogo;
