/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorDown = React.forwardRef<SVGSVGElement, MonitorDownProps>(
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
      <path d="M12 13V7" />
  <path d="m15 10-3 3-3-3" />
  <rect width="20" height="14" x="2" y="3" rx="2" />
  <path d="M12 17v4" />
  <path d="M8 21h8" />
    </svg>
  )
);
MonitorDown.displayName = "MonitorDown";
export const MonitorDownMetadata = { 
  id: "monitor-down", 
  baseId: "monitor-down", 
  variant: "default", 
  name: "Monitor Down", 
  category: "monitor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MonitorDown;
