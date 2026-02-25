/**
 * Auto-generated logo component: Layout Sidebar Right Inactive Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutSidebarRightInactiveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutSidebarRightInactiveOutlineLogo = React.forwardRef<SVGSVGElement, LayoutSidebarRightInactiveOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
  <path d="M15 4v1" />
  <path d="M15 9v1" />
  <path d="M15 14v1" />
  <path d="M15 19v1" />
    </svg>
  )
);

LayoutSidebarRightInactiveOutlineLogo.displayName = "LayoutSidebarRightInactiveOutlineLogo";

export const LayoutSidebarRightInactiveOutlineLogoMetadata = {
  id: "layout-sidebar-right-inactive-outline",
  baseId: "layout-sidebar-right-inactive-outline",
  variant: "default",
  name: "Layout Sidebar Right Inactive Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutSidebarRightInactiveOutlineLogo;
