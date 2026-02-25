/**
 * Auto-generated logo component: Heart Rate Monitor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartRateMonitorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartRateMonitorOutlineLogo = React.forwardRef<SVGSVGElement, HeartRateMonitorOutlineLogoProps>(
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
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10" />
  <path d="M7 20h10" />
  <path d="M9 16v4" />
  <path d="M15 16v4" />
  <path d="M7 10h2l2 3l2 -6l1 3h3" />
    </svg>
  )
);

HeartRateMonitorOutlineLogo.displayName = "HeartRateMonitorOutlineLogo";

export const HeartRateMonitorOutlineLogoMetadata = {
  id: "heart-rate-monitor-outline",
  baseId: "heart-rate-monitor-outline",
  variant: "default",
  name: "Heart Rate Monitor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartRateMonitorOutlineLogo;
