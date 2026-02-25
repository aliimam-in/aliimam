/**
 * Auto-generated logo component: Chart Funnel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartFunnelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartFunnelOutlineLogo = React.forwardRef<SVGSVGElement, ChartFunnelOutlineLogoProps>(
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
      <path d="M4.387 3h15.226a1 1 0 0 1 .948 1.316l-5.105 15.316a2 2 0 0 1 -1.898 1.368h-3.116a2 2 0 0 1 -1.898 -1.368l-5.104 -15.316a1 1 0 0 1 .947 -1.316" />
  <path d="M5 9h14" />
  <path d="M7 15h10" />
    </svg>
  )
);

ChartFunnelOutlineLogo.displayName = "ChartFunnelOutlineLogo";

export const ChartFunnelOutlineLogoMetadata = {
  id: "chart-funnel-outline",
  baseId: "chart-funnel-outline",
  variant: "default",
  name: "Chart Funnel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartFunnelOutlineLogo;
