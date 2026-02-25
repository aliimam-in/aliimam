/**
 * Auto-generated logo component: Dashboard Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DashboardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DashboardOutlineLogo = React.forwardRef<SVGSVGElement, DashboardOutlineLogoProps>(
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
      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M13.45 11.55l2.05 -2.05" />
  <path d="M6.4 20a9 9 0 1 1 11.2 0l-11.2 0" />
    </svg>
  )
);

DashboardOutlineLogo.displayName = "DashboardOutlineLogo";

export const DashboardOutlineLogoMetadata = {
  id: "dashboard-outline",
  baseId: "dashboard-outline",
  variant: "default",
  name: "Dashboard Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DashboardOutlineLogo;
