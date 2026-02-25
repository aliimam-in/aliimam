/**
 * Auto-generated logo component: Layout Sidebar Right (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutSidebarRightFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutSidebarRightFilledLogo = React.forwardRef<SVGSVGElement, LayoutSidebarRightFilledLogoProps>(
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
      <path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3zm8 -16h-8a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8z" />
    </svg>
  )
);

LayoutSidebarRightFilledLogo.displayName = "LayoutSidebarRightFilledLogo";

export const LayoutSidebarRightFilledLogoMetadata = {
  id: "layout-sidebar-right_filled",
  baseId: "layout-sidebar-right",
  variant: "filled",
  name: "Layout Sidebar Right",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutSidebarRightFilledLogo;
