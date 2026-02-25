/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DashboardFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DashboardFilled = React.forwardRef<SVGSVGElement, DashboardFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2.954a10 10 0 0 1 6.222 17.829a1 1 0 0 1 -.622 .217h-11.2a1 1 0 0 1 -.622 -.217a10 10 0 0 1 6.222 -17.829m4.207 5.839a1 1 0 0 0 -1.414 0l-2.276 2.274a2.003 2.003 0 0 0 -2.514 1.815l-.003 .118a2 2 0 1 0 3.933 -.517l2.274 -2.276a1 1 0 0 0 0 -1.414" />
    </svg>
  )
);
DashboardFilled.displayName = "DashboardFilled";
export const DashboardFilledMetadata = { id: "dashboard_filled", baseId: "dashboard", variant: "filled", name: "Dashboard", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default DashboardFilled;
