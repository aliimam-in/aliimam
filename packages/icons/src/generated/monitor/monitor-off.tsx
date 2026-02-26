/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorOff = React.forwardRef<SVGSVGElement, MonitorOffProps>(
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
      <path d="M12 17v4" />
  <path d="M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826" />
  <path d="m2 2 20 20" />
  <path d="M8 21h8" />
  <path d="M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042" />
    </svg>
  )
);
MonitorOff.displayName = "MonitorOff";
export const MonitorOffMetadata = { 
  id: "monitor-off", 
  baseId: "monitor-off", 
  variant: "default", 
  name: "Monitor Off", 
  category: "monitor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MonitorOff;
