/**
 * Auto-generated logo component: Chart Column (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartColumnLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartColumnLogo = React.forwardRef<SVGSVGElement, ChartColumnLogoProps>(
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M18 17V9" />
  <path d="M13 17V5" />
  <path d="M8 17v-3" />
    </svg>
  )
);

ChartColumnLogo.displayName = "ChartColumnLogo";

export const ChartColumnLogoMetadata = {
  id: "chart-column",
  baseId: "chart-column",
  variant: "default",
  name: "Chart Column",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartColumnLogo;
