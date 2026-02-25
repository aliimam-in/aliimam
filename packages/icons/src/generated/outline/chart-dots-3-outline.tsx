/**
 * Auto-generated logo component: Chart Dots 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartDots3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartDots3OutlineLogo = React.forwardRef<SVGSVGElement, ChartDots3OutlineLogoProps>(
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
      <path d="M3 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M3 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M9 17l5 -1.5" />
  <path d="M6.5 8.5l7.81 5.37" />
  <path d="M7 7l8 -1" />
    </svg>
  )
);

ChartDots3OutlineLogo.displayName = "ChartDots3OutlineLogo";

export const ChartDots3OutlineLogoMetadata = {
  id: "chart-dots-3-outline",
  baseId: "chart-dots-3-outline",
  variant: "default",
  name: "Chart Dots 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartDots3OutlineLogo;
