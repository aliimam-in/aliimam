/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorStopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorStop = React.forwardRef<SVGSVGElement, MonitorStopProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 17v4" />
  <path d="M8 21h8" />
  <rect x="2" y="3" width="20" height="14" rx="2" />
  <rect x="9" y="7" width="6" height="6" rx="1" />
    </svg>
  )
);
MonitorStop.displayName = "MonitorStop";
export const MonitorStopMetadata = { id: "monitor-stop", baseId: "monitor-stop", variant: "default", name: "Monitor Stop", category: "monitor", tags: [], viewBox: "0 0 24 24" } as const;
export default MonitorStop;
