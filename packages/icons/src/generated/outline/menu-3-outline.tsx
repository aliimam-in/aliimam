/**
 * Auto-generated logo component: Menu 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Menu3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Menu3OutlineLogo = React.forwardRef<SVGSVGElement, Menu3OutlineLogoProps>(
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
      <path d="M10 6h10" />
  <path d="M4 12h16" />
  <path d="M7 12h13" />
  <path d="M4 18h10" />
    </svg>
  )
);

Menu3OutlineLogo.displayName = "Menu3OutlineLogo";

export const Menu3OutlineLogoMetadata = {
  id: "menu-3-outline",
  baseId: "menu-3-outline",
  variant: "default",
  name: "Menu 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Menu3OutlineLogo;
