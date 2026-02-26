/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartFunnelFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartFunnelFilled = React.forwardRef<SVGSVGElement, ChartFunnelFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17.72 16l-1.315 3.948a3 3 0 0 1 -2.847 2.052h-3.116a3 3 0 0 1 -2.847 -2.052l-1.315 -3.948zm2 -6l-1.333 4h-12.774l-1.333 -4zm-.106 -8a2 2 0 0 1 1.896 2.632l-1.123 3.368h-16.774l-1.123 -3.368a2 2 0 0 1 1.72 -2.624l.177 -.008z" />
    </svg>
  )
);
ChartFunnelFilled.displayName = "ChartFunnelFilled";
export const ChartFunnelFilledMetadata = { 
  id: "chart-funnel_filled", 
  baseId: "chart-funnel", 
  variant: "filled", 
  name: "Chart Funnel", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartFunnelFilled;
