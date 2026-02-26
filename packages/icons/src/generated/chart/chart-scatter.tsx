/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartScatterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartScatter = React.forwardRef<SVGSVGElement, ChartScatterProps>(
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
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
  <circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
  <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
  <circle cx="17.5" cy="14.5" r=".5" fill="currentColor" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </svg>
  )
);
ChartScatter.displayName = "ChartScatter";
export const ChartScatterMetadata = { 
  id: "chart-scatter", 
  baseId: "chart-scatter", 
  variant: "default", 
  name: "Chart Scatter", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartScatter;
