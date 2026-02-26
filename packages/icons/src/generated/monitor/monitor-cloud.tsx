/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorCloudProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorCloud = React.forwardRef<SVGSVGElement, MonitorCloudProps>(
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
      <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
  <path d="M12 17v4" />
  <path d="M8 21h8" />
  <rect x="2" y="3" width="20" height="14" rx="2" />
    </svg>
  )
);
MonitorCloud.displayName = "MonitorCloud";
export const MonitorCloudMetadata = { 
  id: "monitor-cloud", 
  baseId: "monitor-cloud", 
  variant: "default", 
  name: "Monitor Cloud", 
  category: "monitor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MonitorCloud;
