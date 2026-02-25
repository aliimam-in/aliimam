/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartColumnProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartColumn = React.forwardRef<SVGSVGElement, ChartColumnProps>(
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
  <path d="M18 17V9" />
  <path d="M13 17V5" />
  <path d="M8 17v-3" />
    </svg>
  )
);
ChartColumn.displayName = "ChartColumn";
export const ChartColumnMetadata = { 
  id: "chart-column", 
  baseId: "chart-column", 
  variant: "default", 
  name: "Chart Column", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartColumn;
