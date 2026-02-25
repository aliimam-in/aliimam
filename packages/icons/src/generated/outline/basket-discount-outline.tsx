/**
 * Auto-generated logo component: Basket Discount Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BasketDiscountOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BasketDiscountOutlineLogo = React.forwardRef<SVGSVGElement, BasketDiscountOutlineLogoProps>(
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
  <path d="M12.5 20h-5.256a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.394 2.248" />
  <path d="M13.856 13.254a2 2 0 1 0 -1.856 2.746" />
  <path d="M16 21l5 -5" />
  <path d="M21 21v.01" />
  <path d="M16 16v.01" />
    </svg>
  )
);

BasketDiscountOutlineLogo.displayName = "BasketDiscountOutlineLogo";

export const BasketDiscountOutlineLogoMetadata = {
  id: "basket-discount-outline",
  baseId: "basket-discount-outline",
  variant: "default",
  name: "Basket Discount Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BasketDiscountOutlineLogo;
