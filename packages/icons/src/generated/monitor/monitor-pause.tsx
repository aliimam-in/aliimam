/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorPauseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorPause = React.forwardRef<SVGSVGElement, MonitorPauseProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10 13V7" />
  <path d="M14 13V7" />
  <rect width="20" height="14" x="2" y="3" rx="2" />
  <path d="M12 17v4" />
  <path d="M8 21h8" />
    </svg>
  )
);
MonitorPause.displayName = "MonitorPause";
export const MonitorPauseMetadata = { 
  id: "monitor-pause", 
  baseId: "monitor-pause", 
  variant: "default", 
  name: "Monitor Pause", 
  category: "monitor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MonitorPause;
