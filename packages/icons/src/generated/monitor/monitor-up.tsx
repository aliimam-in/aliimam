/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorUp = React.forwardRef<SVGSVGElement, MonitorUpProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m9 10 3-3 3 3" />
  <path d="M12 13V7" />
  <rect width="20" height="14" x="2" y="3" rx="2" />
  <path d="M12 17v4" />
  <path d="M8 21h8" />
    </svg>
  )
);
MonitorUp.displayName = "MonitorUp";
export const MonitorUpMetadata = { id: "monitor-up", baseId: "monitor-up", variant: "default", name: "Monitor Up", category: "monitor", tags: [], viewBox: "0 0 24 24" } as const;
export default MonitorUp;
