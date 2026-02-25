/**
 * Auto-generated logo component: Device Watch Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchOffOutlineLogoProps>(
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
      <path d="M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132a2.99 2.99 0 0 1 -2.11 .868h-6a3 3 0 0 1 -3 -3v-6c0 -.817 .327 -1.559 .857 -2.1" />
  <path d="M9 18v3h6v-3" />
  <path d="M9 5v-2h6v3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DeviceWatchOffOutlineLogo.displayName = "DeviceWatchOffOutlineLogo";

export const DeviceWatchOffOutlineLogoMetadata = {
  id: "device-watch-off-outline",
  baseId: "device-watch-off-outline",
  variant: "default",
  name: "Device Watch Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchOffOutlineLogo;
