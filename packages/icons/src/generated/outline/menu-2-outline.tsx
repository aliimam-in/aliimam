/**
 * Auto-generated logo component: Menu 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Menu2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Menu2OutlineLogo = React.forwardRef<SVGSVGElement, Menu2OutlineLogoProps>(
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
      <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
    </svg>
  )
);

Menu2OutlineLogo.displayName = "Menu2OutlineLogo";

export const Menu2OutlineLogoMetadata = {
  id: "menu-2-outline",
  baseId: "menu-2-outline",
  variant: "default",
  name: "Menu 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Menu2OutlineLogo;
