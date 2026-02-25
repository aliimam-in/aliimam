/**
 * Auto-generated logo component: Gauge Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GaugeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GaugeOutlineLogo = React.forwardRef<SVGSVGElement, GaugeOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M13.41 10.59l2.59 -2.59" />
  <path d="M7 12a5 5 0 0 1 5 -5" />
    </svg>
  )
);

GaugeOutlineLogo.displayName = "GaugeOutlineLogo";

export const GaugeOutlineLogoMetadata = {
  id: "gauge-outline",
  baseId: "gauge-outline",
  variant: "default",
  name: "Gauge Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GaugeOutlineLogo;
