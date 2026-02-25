/**
 * Auto-generated logo component: Layout Navbar Collapse Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutNavbarCollapseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutNavbarCollapseOutlineLogo = React.forwardRef<SVGSVGElement, LayoutNavbarCollapseOutlineLogoProps>(
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
  <path d="M10 16l2 -2l2 2" />
    </svg>
  )
);

LayoutNavbarCollapseOutlineLogo.displayName = "LayoutNavbarCollapseOutlineLogo";

export const LayoutNavbarCollapseOutlineLogoMetadata = {
  id: "layout-navbar-collapse-outline",
  baseId: "layout-navbar-collapse-outline",
  variant: "default",
  name: "Layout Navbar Collapse Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutNavbarCollapseOutlineLogo;
