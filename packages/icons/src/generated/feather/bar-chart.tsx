/**
 * Auto-generated logo component: Bar Chart (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BarChartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BarChartLogo = React.forwardRef<SVGSVGElement, BarChartLogoProps>(
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
      <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  )
);

BarChartLogo.displayName = "BarChartLogo";

export const BarChartLogoMetadata = {
  id: "bar-chart",
  baseId: "bar-chart",
  variant: "default",
  name: "Bar Chart",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BarChartLogo;
