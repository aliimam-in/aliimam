/**
 * Auto-generated logo component: Device Watch Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchCheckOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchCheckOutlineLogoProps>(
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
      <path d="M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v5.5" />
  <path d="M9 18v3h2.5" />
  <path d="M9 6v-3h6v3" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

DeviceWatchCheckOutlineLogo.displayName = "DeviceWatchCheckOutlineLogo";

export const DeviceWatchCheckOutlineLogoMetadata = {
  id: "device-watch-check-outline",
  baseId: "device-watch-check-outline",
  variant: "default",
  name: "Device Watch Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchCheckOutlineLogo;
