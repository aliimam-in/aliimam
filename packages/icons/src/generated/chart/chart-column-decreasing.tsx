/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartColumnDecreasingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartColumnDecreasing = React.forwardRef<SVGSVGElement, ChartColumnDecreasingProps>(
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
      <path d="M13 17V9" />
  <path d="M18 17v-3" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M8 17V5" />
    </svg>
  )
);
ChartColumnDecreasing.displayName = "ChartColumnDecreasing";
export const ChartColumnDecreasingMetadata = { 
  id: "chart-column-decreasing", 
  baseId: "chart-column-decreasing", 
  variant: "default", 
  name: "Chart Column Decreasing", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartColumnDecreasing;
