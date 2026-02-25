/**
 * Auto-generated logo component: Layout Sidebar Right Collapse Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutSidebarRightCollapseFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutSidebarRightCollapseFilledLogo = React.forwardRef<SVGSVGElement, LayoutSidebarRightCollapseFilledLogoProps>(
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
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 2h-9a1 1 0 0 0 -.993 .883l-.007 .117v12a1 1 0 0 0 .883 .993l.117 .007h9v-14zm-5.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
    </svg>
  )
);

LayoutSidebarRightCollapseFilledLogo.displayName = "LayoutSidebarRightCollapseFilledLogo";

export const LayoutSidebarRightCollapseFilledLogoMetadata = {
  id: "layout-sidebar-right-collapse-filled",
  baseId: "layout-sidebar-right-collapse-filled",
  variant: "default",
  name: "Layout Sidebar Right Collapse Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutSidebarRightCollapseFilledLogo;
