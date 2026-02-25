/**
 * Auto-generated logo component: Device Watch Stats Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchStatsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchStatsOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchStatsOutlineLogoProps>(
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
      <path d="M6 9a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3l0 -6" />
  <path d="M9 18v3h6v-3" />
  <path d="M9 6v-3h6v3" />
  <path d="M9 14v-4" />
  <path d="M12 14v-1" />
  <path d="M15 14v-3" />
    </svg>
  )
);

DeviceWatchStatsOutlineLogo.displayName = "DeviceWatchStatsOutlineLogo";

export const DeviceWatchStatsOutlineLogoMetadata = {
  id: "device-watch-stats-outline",
  baseId: "device-watch-stats-outline",
  variant: "default",
  name: "Device Watch Stats Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchStatsOutlineLogo;
