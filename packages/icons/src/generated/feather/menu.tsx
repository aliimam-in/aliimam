/**
 * Auto-generated logo component: Menu (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MenuLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MenuLogo = React.forwardRef<SVGSVGElement, MenuLogoProps>(
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
      <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
);

MenuLogo.displayName = "MenuLogo";

export const MenuLogoMetadata = {
  id: "menu",
  baseId: "menu",
  variant: "default",
  name: "Menu",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MenuLogo;
