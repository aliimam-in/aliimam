/**
 * Auto-generated logo component: Chart Bubble Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartBubbleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartBubbleOutlineLogo = React.forwardRef<SVGSVGElement, ChartBubbleOutlineLogoProps>(
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
      <path d="M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
    </svg>
  )
);

ChartBubbleOutlineLogo.displayName = "ChartBubbleOutlineLogo";

export const ChartBubbleOutlineLogoMetadata = {
  id: "chart-bubble-outline",
  baseId: "chart-bubble-outline",
  variant: "default",
  name: "Chart Bubble Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartBubbleOutlineLogo;
