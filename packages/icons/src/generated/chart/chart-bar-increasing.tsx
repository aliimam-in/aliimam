/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartBarIncreasingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartBarIncreasing = React.forwardRef<SVGSVGElement, ChartBarIncreasingProps>(
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
  <path d="M7 11h8" />
  <path d="M7 16h12" />
  <path d="M7 6h3" />
    </svg>
  )
);
ChartBarIncreasing.displayName = "ChartBarIncreasing";
export const ChartBarIncreasingMetadata = { 
  id: "chart-bar-increasing", 
  baseId: "chart-bar-increasing", 
  variant: "default", 
  name: "Chart Bar Increasing", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartBarIncreasing;
