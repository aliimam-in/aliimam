/**
 * Auto-generated logo component: Chart Scatter 3d Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartScatter3dOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartScatter3dOutlineLogo = React.forwardRef<SVGSVGElement, ChartScatter3dOutlineLogoProps>(
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
      <path d="M3 20l9 -7" />
  <path d="M12 3v10l9 7" />
  <path d="M17 12v.015" />
  <path d="M17 4.015v.015" />
  <path d="M21 8.015v.015" />
  <path d="M12 19.015v.015" />
  <path d="M3 12.015v.015" />
  <path d="M7 8.015v.015" />
  <path d="M3 4.015v.015" />
    </svg>
  )
);

ChartScatter3dOutlineLogo.displayName = "ChartScatter3dOutlineLogo";

export const ChartScatter3dOutlineLogoMetadata = {
  id: "chart-scatter-3d-outline",
  baseId: "chart-scatter-3d-outline",
  variant: "default",
  name: "Chart Scatter 3d Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartScatter3dOutlineLogo;
