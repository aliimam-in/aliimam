/**
 * Auto-generated logo component: Basket Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BasketDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BasketDownOutlineLogo = React.forwardRef<SVGSVGElement, BasketDownOutlineLogoProps>(
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
  <path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.349 1.989" />
  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
    </svg>
  )
);

BasketDownOutlineLogo.displayName = "BasketDownOutlineLogo";

export const BasketDownOutlineLogoMetadata = {
  id: "basket-down-outline",
  baseId: "basket-down-outline",
  variant: "default",
  name: "Basket Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BasketDownOutlineLogo;
