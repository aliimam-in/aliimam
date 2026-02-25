/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartCandlestickProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartCandlestick = React.forwardRef<SVGSVGElement, ChartCandlestickProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M9 5v4" />
  <rect width="4" height="6" x="7" y="9" rx="1" />
  <path d="M9 15v2" />
  <path d="M17 3v2" />
  <rect width="4" height="8" x="15" y="5" rx="1" />
  <path d="M17 13v3" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </svg>
  )
);
ChartCandlestick.displayName = "ChartCandlestick";
export const ChartCandlestickMetadata = { id: "chart-candlestick", baseId: "chart-candlestick", variant: "default", name: "Chart Candlestick", category: "chart", tags: [], viewBox: "0 0 24 24" } as const;
export default ChartCandlestick;
