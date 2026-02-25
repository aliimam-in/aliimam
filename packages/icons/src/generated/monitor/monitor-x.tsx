/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorX = React.forwardRef<SVGSVGElement, MonitorXProps>(
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
      <path d="m14.5 12.5-5-5" />
  <path d="m9.5 12.5 5-5" />
  <rect width="20" height="14" x="2" y="3" rx="2" />
  <path d="M12 17v4" />
  <path d="M8 21h8" />
    </svg>
  )
);
MonitorX.displayName = "MonitorX";
export const MonitorXMetadata = { 
  id: "monitor-x", 
  baseId: "monitor-x", 
  variant: "default", 
  name: "Monitor X", 
  category: "monitor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MonitorX;
