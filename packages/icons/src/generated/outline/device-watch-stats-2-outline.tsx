/**
 * Auto-generated logo component: Device Watch Stats 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchStats2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchStats2OutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchStats2OutlineLogoProps>(
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
  <path d="M12 10a2 2 0 1 0 2 2" />
    </svg>
  )
);

DeviceWatchStats2OutlineLogo.displayName = "DeviceWatchStats2OutlineLogo";

export const DeviceWatchStats2OutlineLogoMetadata = {
  id: "device-watch-stats-2-outline",
  baseId: "device-watch-stats-2-outline",
  variant: "default",
  name: "Device Watch Stats 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchStats2OutlineLogo;
