/**
 * Auto-generated logo component: Circle Gauge (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleGaugeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleGaugeLogo = React.forwardRef<SVGSVGElement, CircleGaugeLogoProps>(
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
      <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
  <circle cx="12" cy="12" r="2" />
  <path d="M13.4 10.6 19 5" />
    </svg>
  )
);

CircleGaugeLogo.displayName = "CircleGaugeLogo";

export const CircleGaugeLogoMetadata = {
  id: "circle-gauge",
  baseId: "circle-gauge",
  variant: "default",
  name: "Circle Gauge",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleGaugeLogo;
