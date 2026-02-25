/**
 * Auto-generated logo component: Gauge Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GaugeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GaugeOffOutlineLogo = React.forwardRef<SVGSVGElement, GaugeOffOutlineLogoProps>(
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
      <path d="M20.038 16.052a9 9 0 0 0 -12.067 -12.102m-2.333 1.686a9 9 0 1 0 12.73 12.726" />
  <path d="M11.283 11.303a1 1 0 0 0 1.419 1.41" />
  <path d="M14 10l2 -2" />
  <path d="M7 12c0 -1.386 .564 -2.64 1.475 -3.546m2.619 -1.372c.294 -.054 .597 -.082 .906 -.082" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

GaugeOffOutlineLogo.displayName = "GaugeOffOutlineLogo";

export const GaugeOffOutlineLogoMetadata = {
  id: "gauge-off-outline",
  baseId: "gauge-off-outline",
  variant: "default",
  name: "Gauge Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GaugeOffOutlineLogo;
