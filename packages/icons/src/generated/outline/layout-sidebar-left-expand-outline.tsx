/**
 * Auto-generated logo component: Layout Sidebar Left Expand Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutSidebarLeftExpandOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutSidebarLeftExpandOutlineLogo = React.forwardRef<SVGSVGElement, LayoutSidebarLeftExpandOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M9 4v16" />
  <path d="M14 10l2 2l-2 2" />
    </svg>
  )
);

LayoutSidebarLeftExpandOutlineLogo.displayName = "LayoutSidebarLeftExpandOutlineLogo";

export const LayoutSidebarLeftExpandOutlineLogoMetadata = {
  id: "layout-sidebar-left-expand-outline",
  baseId: "layout-sidebar-left-expand-outline",
  variant: "default",
  name: "Layout Sidebar Left Expand Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutSidebarLeftExpandOutlineLogo;
