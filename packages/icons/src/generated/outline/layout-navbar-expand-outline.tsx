/**
 * Auto-generated logo component: Layout Navbar Expand Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutNavbarExpandOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutNavbarExpandOutlineLogo = React.forwardRef<SVGSVGElement, LayoutNavbarExpandOutlineLogoProps>(
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
      <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2" />
  <path d="M4 9h16" />
  <path d="M10 14l2 2l2 -2" />
    </svg>
  )
);

LayoutNavbarExpandOutlineLogo.displayName = "LayoutNavbarExpandOutlineLogo";

export const LayoutNavbarExpandOutlineLogoMetadata = {
  id: "layout-navbar-expand-outline",
  baseId: "layout-navbar-expand-outline",
  variant: "default",
  name: "Layout Navbar Expand Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutNavbarExpandOutlineLogo;
