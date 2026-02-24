/**
 * Auto-generated logo component: Monitor Down (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MonitorDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MonitorDownLogo = React.forwardRef<SVGSVGElement, MonitorDownLogoProps>(
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
      <path d="M12 13V7" />
  <path d="m15 10-3 3-3-3" />
  <rect width="20" height="14" x="2" y="3" rx="2" />
  <path d="M12 17v4" />
  <path d="M8 21h8" />
    </svg>
  )
);

MonitorDownLogo.displayName = "MonitorDownLogo";

export const MonitorDownLogoMetadata = {
  id: "monitor-down",
  baseId: "monitor-down",
  variant: "default",
  name: "Monitor Down",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MonitorDownLogo;
