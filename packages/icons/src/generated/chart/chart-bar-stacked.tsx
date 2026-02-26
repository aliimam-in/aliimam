/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartBarStackedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartBarStacked = React.forwardRef<SVGSVGElement, ChartBarStackedProps>(
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
      <path d="M11 13v4" />
  <path d="M15 5v4" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <rect x="7" y="13" width="9" height="4" rx="1" />
  <rect x="7" y="5" width="12" height="4" rx="1" />
    </svg>
  )
);
ChartBarStacked.displayName = "ChartBarStacked";
export const ChartBarStackedMetadata = { 
  id: "chart-bar-stacked", 
  baseId: "chart-bar-stacked", 
  variant: "default", 
  name: "Chart Bar Stacked", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartBarStacked;
