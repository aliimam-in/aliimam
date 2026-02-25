/**
 * Auto-generated logo component: Layout Sidebar Right Collapse Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutSidebarRightCollapseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutSidebarRightCollapseOutlineLogo = React.forwardRef<SVGSVGElement, LayoutSidebarRightCollapseOutlineLogoProps>(
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
  <path d="M15 4v16" />
  <path d="M9 10l2 2l-2 2" />
    </svg>
  )
);

LayoutSidebarRightCollapseOutlineLogo.displayName = "LayoutSidebarRightCollapseOutlineLogo";

export const LayoutSidebarRightCollapseOutlineLogoMetadata = {
  id: "layout-sidebar-right-collapse-outline",
  baseId: "layout-sidebar-right-collapse-outline",
  variant: "default",
  name: "Layout Sidebar Right Collapse Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutSidebarRightCollapseOutlineLogo;
