/**
 * Auto-generated logo component: Basket Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BasketOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BasketOffOutlineLogo = React.forwardRef<SVGSVGElement, BasketOffOutlineLogoProps>(
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
  <path d="M7 10l.75 -2.252m1.001 -3.002l.249 -.746" />
  <path d="M12 8h7a2 2 0 0 1 1.977 2.304c-.442 2.516 -.756 4.438 -.977 5.696m-1.01 3.003a2.997 2.997 0 0 1 -2.234 .997h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h2.999" />
  <path d="M12 12a2 2 0 1 0 2 2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BasketOffOutlineLogo.displayName = "BasketOffOutlineLogo";

export const BasketOffOutlineLogoMetadata = {
  id: "basket-off-outline",
  baseId: "basket-off-outline",
  variant: "default",
  name: "Basket Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BasketOffOutlineLogo;
