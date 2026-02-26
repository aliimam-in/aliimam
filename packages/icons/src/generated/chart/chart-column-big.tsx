/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartColumnBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartColumnBig = React.forwardRef<SVGSVGElement, ChartColumnBigProps>(
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
  <rect x="15" y="5" width="4" height="12" rx="1" />
  <rect x="7" y="8" width="4" height="9" rx="1" />
    </svg>
  )
);
ChartColumnBig.displayName = "ChartColumnBig";
export const ChartColumnBigMetadata = { 
  id: "chart-column-big", 
  baseId: "chart-column-big", 
  variant: "default", 
  name: "Chart Column Big", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartColumnBig;
