/**
 * Auto-generated logo component: Menu Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MenuOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MenuOutlineLogo = React.forwardRef<SVGSVGElement, MenuOutlineLogoProps>(
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
      <path d="M4 8l16 0" />
  <path d="M4 16l16 0" />
    </svg>
  )
);

MenuOutlineLogo.displayName = "MenuOutlineLogo";

export const MenuOutlineLogoMetadata = {
  id: "menu-outline",
  baseId: "menu-outline",
  variant: "default",
  name: "Menu Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MenuOutlineLogo;
