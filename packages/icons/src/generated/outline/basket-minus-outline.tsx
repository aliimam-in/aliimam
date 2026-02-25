/**
 * Auto-generated logo component: Basket Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BasketMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BasketMinusOutlineLogo = React.forwardRef<SVGSVGElement, BasketMinusOutlineLogoProps>(
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
      <path d="M17 10l-2 -6" />
  <path d="M7 10l2 -6" />
  <path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.833 4.75" />
  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M16 19h6" />
    </svg>
  )
);

BasketMinusOutlineLogo.displayName = "BasketMinusOutlineLogo";

export const BasketMinusOutlineLogoMetadata = {
  id: "basket-minus-outline",
  baseId: "basket-minus-outline",
  variant: "default",
  name: "Basket Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BasketMinusOutlineLogo;
