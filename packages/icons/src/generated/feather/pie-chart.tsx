/**
 * Auto-generated logo component: Pie Chart (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PieChartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PieChartLogo = React.forwardRef<SVGSVGElement, PieChartLogoProps>(
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
    </svg>
  )
);

PieChartLogo.displayName = "PieChartLogo";

export const PieChartLogoMetadata = {
  id: "pie-chart",
  baseId: "pie-chart",
  variant: "default",
  name: "Pie Chart",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PieChartLogo;
