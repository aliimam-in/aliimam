/**
 * Auto-generated logo component: Menu Deep Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MenuDeepOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MenuDeepOutlineLogo = React.forwardRef<SVGSVGElement, MenuDeepOutlineLogoProps>(
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
      <path d="M4 6h16" />
  <path d="M7 12h13" />
  <path d="M10 18h10" />
    </svg>
  )
);

MenuDeepOutlineLogo.displayName = "MenuDeepOutlineLogo";

export const MenuDeepOutlineLogoMetadata = {
  id: "menu-deep-outline",
  baseId: "menu-deep-outline",
  variant: "default",
  name: "Menu Deep Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MenuDeepOutlineLogo;
