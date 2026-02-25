/**
 * Auto-generated logo component: Device Watch Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchPauseOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchPauseOutlineLogoProps>(
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
      <path d="M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" />
  <path d="M9 18v3h4" />
  <path d="M9 6v-3h6v3" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

DeviceWatchPauseOutlineLogo.displayName = "DeviceWatchPauseOutlineLogo";

export const DeviceWatchPauseOutlineLogoMetadata = {
  id: "device-watch-pause-outline",
  baseId: "device-watch-pause-outline",
  variant: "default",
  name: "Device Watch Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchPauseOutlineLogo;
