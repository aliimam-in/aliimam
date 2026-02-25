/**
 * Auto-generated logo component: Chart Scatter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartScatterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartScatterOutlineLogo = React.forwardRef<SVGSVGElement, ChartScatterOutlineLogoProps>(
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
      <path d="M3 3v18h18" />
  <path d="M8 15.015v.015" />
  <path d="M16 16.015v.015" />
  <path d="M8 7.03v.015" />
  <path d="M12 11.03v.015" />
  <path d="M19 11.03v.015" />
    </svg>
  )
);

ChartScatterOutlineLogo.displayName = "ChartScatterOutlineLogo";

export const ChartScatterOutlineLogoMetadata = {
  id: "chart-scatter-outline",
  baseId: "chart-scatter-outline",
  variant: "default",
  name: "Chart Scatter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartScatterOutlineLogo;
