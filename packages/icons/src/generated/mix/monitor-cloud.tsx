/**
 * Auto-generated logo component: Monitor Cloud (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MonitorCloudLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MonitorCloudLogo = React.forwardRef<SVGSVGElement, MonitorCloudLogoProps>(
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
      <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
  <path d="M12 17v4" />
  <path d="M8 21h8" />
  <rect x="2" y="3" width="20" height="14" rx="2" />
    </svg>
  )
);

MonitorCloudLogo.displayName = "MonitorCloudLogo";

export const MonitorCloudLogoMetadata = {
  id: "monitor-cloud",
  baseId: "monitor-cloud",
  variant: "default",
  name: "Monitor Cloud",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MonitorCloudLogo;
