/**
 * Auto-generated logo component: Monitor (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MonitorLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MonitorLogo = React.forwardRef<SVGSVGElement, MonitorLogoProps>(
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
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  )
);

MonitorLogo.displayName = "MonitorLogo";

export const MonitorLogoMetadata = {
  id: "monitor",
  baseId: "monitor",
  variant: "default",
  name: "Monitor",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MonitorLogo;
