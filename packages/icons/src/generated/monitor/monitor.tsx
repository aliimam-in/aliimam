/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Monitor = React.forwardRef<SVGSVGElement, MonitorProps>(
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
      <rect width="20" height="14" x="2" y="3" rx="2" />
  <line x1="8" x2="16" y1="21" y2="21" />
  <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  )
);
Monitor.displayName = "Monitor";
export const MonitorMetadata = { 
  id: "monitor", 
  baseId: "monitor", 
  variant: "default", 
  name: "Monitor", 
  category: "monitor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Monitor;
