/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartLine = React.forwardRef<SVGSVGElement, ChartLineProps>(
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
  <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
);
ChartLine.displayName = "ChartLine";
export const ChartLineMetadata = { 
  id: "chart-line", 
  baseId: "chart-line", 
  variant: "default", 
  name: "Chart Line", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartLine;
