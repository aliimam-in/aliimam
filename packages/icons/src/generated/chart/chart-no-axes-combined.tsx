/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartNoAxesCombinedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartNoAxesCombined = React.forwardRef<SVGSVGElement, ChartNoAxesCombinedProps>(
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
      <path d="M12 16v5" />
  <path d="M16 14v7" />
  <path d="M20 10v11" />
  <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
  <path d="M4 18v3" />
  <path d="M8 14v7" />
    </svg>
  )
);
ChartNoAxesCombined.displayName = "ChartNoAxesCombined";
export const ChartNoAxesCombinedMetadata = { 
  id: "chart-no-axes-combined", 
  baseId: "chart-no-axes-combined", 
  variant: "default", 
  name: "Chart No Axes Combined", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartNoAxesCombined;
