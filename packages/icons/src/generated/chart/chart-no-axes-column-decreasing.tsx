/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartNoAxesColumnDecreasingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartNoAxesColumnDecreasing = React.forwardRef<SVGSVGElement, ChartNoAxesColumnDecreasingProps>(
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
      <path d="M5 21V3" />
  <path d="M12 21V9" />
  <path d="M19 21v-6" />
    </svg>
  )
);
ChartNoAxesColumnDecreasing.displayName = "ChartNoAxesColumnDecreasing";
export const ChartNoAxesColumnDecreasingMetadata = { 
  id: "chart-no-axes-column-decreasing", 
  baseId: "chart-no-axes-column-decreasing", 
  variant: "default", 
  name: "Chart No Axes Column Decreasing", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartNoAxesColumnDecreasing;
