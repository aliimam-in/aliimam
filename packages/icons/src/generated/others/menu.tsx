/**
 * Auto-generated logo component: Menu (default)
 * Category: others
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
      <path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />
    </svg>
  )
);

MenuLogo.displayName = "MenuLogo";

export const MenuLogoMetadata = {
  id: "menu",
  baseId: "menu",
  variant: "default",
  name: "Menu",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MenuLogo;
