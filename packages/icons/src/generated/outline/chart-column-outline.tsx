/**
 * Auto-generated logo component: Chart Column Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartColumnOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartColumnOutlineLogo = React.forwardRef<SVGSVGElement, ChartColumnOutlineLogoProps>(
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
      <path d="M4 20h3" />
  <path d="M17 20h3" />
  <path d="M10.5 20h3" />
  <path d="M4 16h3" />
  <path d="M17 16h3" />
  <path d="M10.5 16h3" />
  <path d="M4 12h3" />
  <path d="M17 12h3" />
  <path d="M10.5 12h3" />
  <path d="M4 8h3" />
  <path d="M17 8h3" />
  <path d="M4 4h3" />
    </svg>
  )
);

ChartColumnOutlineLogo.displayName = "ChartColumnOutlineLogo";

export const ChartColumnOutlineLogoMetadata = {
  id: "chart-column-outline",
  baseId: "chart-column-outline",
  variant: "default",
  name: "Chart Column Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartColumnOutlineLogo;
