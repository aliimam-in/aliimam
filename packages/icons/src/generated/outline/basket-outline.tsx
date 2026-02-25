/**
 * Auto-generated logo component: Basket Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BasketOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BasketOutlineLogo = React.forwardRef<SVGSVGElement, BasketOutlineLogoProps>(
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
      <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304" />
  <path d="M17 10l-2 -6" />
  <path d="M7 10l2 -6" />
    </svg>
  )
);

BasketOutlineLogo.displayName = "BasketOutlineLogo";

export const BasketOutlineLogoMetadata = {
  id: "basket-outline",
  baseId: "basket-outline",
  variant: "default",
  name: "Basket Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BasketOutlineLogo;
