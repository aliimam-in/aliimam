/**
 * Auto-generated logo component: Layout Dashboard Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutDashboardFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutDashboardFilledLogo = React.forwardRef<SVGSVGElement, LayoutDashboardFilledLogoProps>(
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
      <path d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" />
    </svg>
  )
);

LayoutDashboardFilledLogo.displayName = "LayoutDashboardFilledLogo";

export const LayoutDashboardFilledLogoMetadata = {
  id: "layout-dashboard-filled",
  baseId: "layout-dashboard-filled",
  variant: "default",
  name: "Layout Dashboard Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutDashboardFilledLogo;
