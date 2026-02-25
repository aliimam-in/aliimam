/**
 * Auto-generated logo component: Chart Cohort Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartCohortOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartCohortOutlineLogo = React.forwardRef<SVGSVGElement, ChartCohortOutlineLogoProps>(
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
      <path d="M3 9h18v-6h-18v18h6v-18" />
  <path d="M3 15h12v-12" />
    </svg>
  )
);

ChartCohortOutlineLogo.displayName = "ChartCohortOutlineLogo";

export const ChartCohortOutlineLogoMetadata = {
  id: "chart-cohort-outline",
  baseId: "chart-cohort-outline",
  variant: "default",
  name: "Chart Cohort Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartCohortOutlineLogo;
