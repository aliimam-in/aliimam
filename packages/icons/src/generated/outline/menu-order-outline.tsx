/**
 * Auto-generated logo component: Menu Order Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MenuOrderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MenuOrderOutlineLogo = React.forwardRef<SVGSVGElement, MenuOrderOutlineLogoProps>(
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
      <path d="M4 10h16" />
  <path d="M4 14h16" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M9 6l3 -3l3 3" />
    </svg>
  )
);

MenuOrderOutlineLogo.displayName = "MenuOrderOutlineLogo";

export const MenuOrderOutlineLogoMetadata = {
  id: "menu-order-outline",
  baseId: "menu-order-outline",
  variant: "default",
  name: "Menu Order Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MenuOrderOutlineLogo;
