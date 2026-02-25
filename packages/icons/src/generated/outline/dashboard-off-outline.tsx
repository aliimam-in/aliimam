/**
 * Auto-generated logo component: Dashboard Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DashboardOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DashboardOffOutlineLogo = React.forwardRef<SVGSVGElement, DashboardOffOutlineLogoProps>(
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
      <path d="M11.175 11.178a2 2 0 1 0 2.653 2.634" />
  <path d="M14.5 10.5l1 -1" />
  <path d="M8.621 4.612a9 9 0 0 1 11.721 11.72m-1.516 2.488a9.008 9.008 0 0 1 -1.226 1.18h-11.2a9 9 0 0 1 -.268 -13.87" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DashboardOffOutlineLogo.displayName = "DashboardOffOutlineLogo";

export const DashboardOffOutlineLogoMetadata = {
  id: "dashboard-off-outline",
  baseId: "dashboard-off-outline",
  variant: "default",
  name: "Dashboard Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DashboardOffOutlineLogo;
