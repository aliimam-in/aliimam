/**
 * Auto-generated logo component: Chart Column Big (default)
 * Category: chart
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartColumnBigLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartColumnBigLogo = React.forwardRef<SVGSVGElement, ChartColumnBigLogoProps>(
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
  <rect x="15" y="5" width="4" height="12" rx="1" />
  <rect x="7" y="8" width="4" height="9" rx="1" />
    </svg>
  )
);

ChartColumnBigLogo.displayName = "ChartColumnBigLogo";

export const ChartColumnBigLogoMetadata = {
  id: "chart-column-big",
  baseId: "chart-column-big",
  variant: "default",
  name: "Chart Column Big",
  category: "chart",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartColumnBigLogo;
