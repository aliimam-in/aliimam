/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartDots3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartDots3Filled = React.forwardRef<SVGSVGElement, ChartDots3FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 2a4 4 0 1 1 -3.843 5.114l-6.295 .786a3 3 0 0 1 -.094 .257l6.446 4.431a3 3 0 1 1 -.695 4.099l-3.527 1.058q .008 .127 .008 .255a4 4 0 1 1 -8 0l.005 -.2a4 4 0 0 1 7.366 -1.954l3.64 -1.094l.01 -.102q .023 -.204 .074 -.4l-6.688 -4.6a3 3 0 0 1 -4.407 -2.65l.005 -.176a3 3 0 0 1 5.784 -.931l6.312 -.79a4 4 0 0 1 3.899 -3.103" />
    </svg>
  )
);
ChartDots3Filled.displayName = "ChartDots3Filled";
export const ChartDots3FilledMetadata = { id: "chart-dots-3_filled", baseId: "chart-dots-3", variant: "filled", name: "Chart Dots 3", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ChartDots3Filled;
