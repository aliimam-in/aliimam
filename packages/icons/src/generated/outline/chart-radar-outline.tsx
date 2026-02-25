/**
 * Auto-generated logo component: Chart Radar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartRadarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartRadarOutlineLogo = React.forwardRef<SVGSVGElement, ChartRadarOutlineLogoProps>(
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
      <path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11l9.5 -7" />
  <path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5l5.5 -4" />
  <path d="M2.5 10l9.5 3l9.5 -3" />
  <path d="M12 3v10l6 8" />
  <path d="M6 21l6 -8" />
    </svg>
  )
);

ChartRadarOutlineLogo.displayName = "ChartRadarOutlineLogo";

export const ChartRadarOutlineLogoMetadata = {
  id: "chart-radar-outline",
  baseId: "chart-radar-outline",
  variant: "default",
  name: "Chart Radar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartRadarOutlineLogo;
