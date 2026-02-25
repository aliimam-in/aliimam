/**
 * Auto-generated logo component: Layout Sidebar Inactive Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutSidebarInactiveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutSidebarInactiveOutlineLogo = React.forwardRef<SVGSVGElement, LayoutSidebarInactiveOutlineLogoProps>(
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
  <path d="M9 4v1" />
  <path d="M9 9v1" />
  <path d="M9 14v1" />
  <path d="M9 19v1" />
    </svg>
  )
);

LayoutSidebarInactiveOutlineLogo.displayName = "LayoutSidebarInactiveOutlineLogo";

export const LayoutSidebarInactiveOutlineLogoMetadata = {
  id: "layout-sidebar-inactive-outline",
  baseId: "layout-sidebar-inactive-outline",
  variant: "default",
  name: "Layout Sidebar Inactive Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutSidebarInactiveOutlineLogo;
