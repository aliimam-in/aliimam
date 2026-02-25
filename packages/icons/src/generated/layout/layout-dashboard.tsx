/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutDashboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutDashboard = React.forwardRef<SVGSVGElement, LayoutDashboardProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="7" height="9" x="3" y="3" rx="1" />
  <rect width="7" height="5" x="14" y="3" rx="1" />
  <rect width="7" height="9" x="14" y="12" rx="1" />
  <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
);
LayoutDashboard.displayName = "LayoutDashboard";
export const LayoutDashboardMetadata = { id: "layout-dashboard", baseId: "layout-dashboard", variant: "default", name: "Layout Dashboard", category: "layout", tags: [], viewBox: "0 0 24 24" } as const;
export default LayoutDashboard;
