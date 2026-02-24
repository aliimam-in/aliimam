/**
 * Auto-generated logo component: Gauge (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GaugeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GaugeLogo = React.forwardRef<SVGSVGElement, GaugeLogoProps>(
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
      <path d="m12 14 4-4" />
  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
);

GaugeLogo.displayName = "GaugeLogo";

export const GaugeLogoMetadata = {
  id: "gauge",
  baseId: "gauge",
  variant: "default",
  name: "Gauge",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GaugeLogo;
