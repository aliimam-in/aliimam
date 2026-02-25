/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorPlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorPlay = React.forwardRef<SVGSVGElement, MonitorPlayProps>(
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
      <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
  <path d="M12 17v4" />
  <path d="M8 21h8" />
  <rect x="2" y="3" width="20" height="14" rx="2" />
    </svg>
  )
);
MonitorPlay.displayName = "MonitorPlay";
export const MonitorPlayMetadata = { 
  id: "monitor-play", 
  baseId: "monitor-play", 
  variant: "default", 
  name: "Monitor Play", 
  category: "monitor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MonitorPlay;
