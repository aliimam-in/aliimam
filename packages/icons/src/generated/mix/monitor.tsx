/**
 * Auto-generated logo component: Monitor (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMonitorLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMonitorLogo = React.forwardRef<SVGSVGElement, MixMonitorLogoProps>(
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
      <rect width="20" height="14" x="2" y="3" rx="2" />
  <line x1="8" x2="16" y1="21" y2="21" />
  <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  )
);

MixMonitorLogo.displayName = "MixMonitorLogo";

export const MixMonitorLogoMetadata = {
  id: "monitor",
  baseId: "monitor",
  variant: "default",
  name: "Monitor",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMonitorLogo;
