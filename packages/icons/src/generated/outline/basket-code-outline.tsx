/**
 * Auto-generated logo component: Basket Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BasketCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BasketCodeOutlineLogo = React.forwardRef<SVGSVGElement, BasketCodeOutlineLogoProps>(
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
  <path d="M11 20h-3.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304c-.21 1.202 -.37 2.104 -.475 2.705" />
  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

BasketCodeOutlineLogo.displayName = "BasketCodeOutlineLogo";

export const BasketCodeOutlineLogoMetadata = {
  id: "basket-code-outline",
  baseId: "basket-code-outline",
  variant: "default",
  name: "Basket Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BasketCodeOutlineLogo;
