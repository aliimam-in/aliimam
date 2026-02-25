/**
 * Auto-generated logo component: Layout Sidebar (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutSidebarFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutSidebarFilledLogo = React.forwardRef<SVGSVGElement, LayoutSidebarFilledLogoProps>(
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
      <path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3zm12 -16h-8v14h8a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

LayoutSidebarFilledLogo.displayName = "LayoutSidebarFilledLogo";

export const LayoutSidebarFilledLogoMetadata = {
  id: "layout-sidebar_filled",
  baseId: "layout-sidebar",
  variant: "filled",
  name: "Layout Sidebar",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutSidebarFilledLogo;
