/**
 * Auto-generated logo component: Chart Candle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartCandleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartCandleOutlineLogo = React.forwardRef<SVGSVGElement, ChartCandleOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M4 7a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3" />
  <path d="M6 4l0 2" />
  <path d="M6 11l0 9" />
  <path d="M10 15a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3" />
  <path d="M12 4l0 10" />
  <path d="M12 19l0 1" />
  <path d="M16 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M18 4l0 1" />
  <path d="M18 11l0 9" />
    </svg>
  )
);

ChartCandleOutlineLogo.displayName = "ChartCandleOutlineLogo";

export const ChartCandleOutlineLogoMetadata = {
  id: "chart-candle-outline",
  baseId: "chart-candle-outline",
  variant: "default",
  name: "Chart Candle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartCandleOutlineLogo;
