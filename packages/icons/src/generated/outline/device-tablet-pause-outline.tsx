/**
 * Auto-generated logo component: Device Tablet Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletPauseOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletPauseOutlineLogoProps>(
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
      <path d="M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
  <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    </svg>
  )
);

DeviceTabletPauseOutlineLogo.displayName = "DeviceTabletPauseOutlineLogo";

export const DeviceTabletPauseOutlineLogoMetadata = {
  id: "device-tablet-pause-outline",
  baseId: "device-tablet-pause-outline",
  variant: "default",
  name: "Device Tablet Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletPauseOutlineLogo;
