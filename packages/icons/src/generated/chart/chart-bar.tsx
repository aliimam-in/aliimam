/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartBarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartBar = React.forwardRef<SVGSVGElement, ChartBarProps>(
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M7 16h8" />
  <path d="M7 11h12" />
  <path d="M7 6h3" />
    </svg>
  )
);
ChartBar.displayName = "ChartBar";
export const ChartBarMetadata = { 
  id: "chart-bar", 
  baseId: "chart-bar", 
  variant: "default", 
  name: "Chart Bar", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartBar;
