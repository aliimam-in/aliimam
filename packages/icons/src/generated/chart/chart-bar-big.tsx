/**
 * Auto-generated logo component: Chart Bar Big (default)
 * Category: chart
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartBarBigLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartBarBigLogo = React.forwardRef<SVGSVGElement, ChartBarBigLogoProps>(
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
  <rect x="7" y="13" width="9" height="4" rx="1" />
  <rect x="7" y="5" width="12" height="4" rx="1" />
    </svg>
  )
);

ChartBarBigLogo.displayName = "ChartBarBigLogo";

export const ChartBarBigLogoMetadata = {
  id: "chart-bar-big",
  baseId: "chart-bar-big",
  variant: "default",
  name: "Chart Bar Big",
  category: "chart",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartBarBigLogo;
