/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorDot = React.forwardRef<SVGSVGElement, MonitorDotProps>(
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
  <path d="M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" />
  <path d="M8 21h8" />
  <circle cx="19" cy="6" r="3" />
    </svg>
  )
);
MonitorDot.displayName = "MonitorDot";
export const MonitorDotMetadata = { 
  id: "monitor-dot", 
  baseId: "monitor-dot", 
  variant: "default", 
  name: "Monitor Dot", 
  category: "monitor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MonitorDot;
