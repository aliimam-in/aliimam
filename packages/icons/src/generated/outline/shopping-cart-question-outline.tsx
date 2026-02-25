/**
 * Auto-generated logo component: Shopping Cart Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShoppingCartQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShoppingCartQuestionOutlineLogo = React.forwardRef<SVGSVGElement, ShoppingCartQuestionOutlineLogoProps>(
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
  <path d="M13.5 17h-7.5v-14h-2" />
  <path d="M6 5l14 1l-.714 5m-4.786 2h-8.5" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

ShoppingCartQuestionOutlineLogo.displayName = "ShoppingCartQuestionOutlineLogo";

export const ShoppingCartQuestionOutlineLogoMetadata = {
  id: "shopping-cart-question-outline",
  baseId: "shopping-cart-question-outline",
  variant: "default",
  name: "Shopping Cart Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShoppingCartQuestionOutlineLogo;
