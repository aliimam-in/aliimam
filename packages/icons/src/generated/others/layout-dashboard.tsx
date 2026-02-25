/**
 * Auto-generated logo component: Layout Dashboard (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutDashboardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutDashboardLogo = React.forwardRef<SVGSVGElement, LayoutDashboardLogoProps>(
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
  <rect width="7" height="5" x="14" y="3" rx="1" />
  <rect width="7" height="9" x="14" y="12" rx="1" />
  <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
);

LayoutDashboardLogo.displayName = "LayoutDashboardLogo";

export const LayoutDashboardLogoMetadata = {
  id: "layout-dashboard",
  baseId: "layout-dashboard",
  variant: "default",
  name: "Layout Dashboard",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutDashboardLogo;
