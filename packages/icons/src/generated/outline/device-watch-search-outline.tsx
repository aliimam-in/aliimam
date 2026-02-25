/**
 * Auto-generated logo component: Device Watch Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchSearchOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchSearchOutlineLogoProps>(
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
      <path d="M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v2" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
  <path d="M9 18v3h3" />
  <path d="M9 6v-3h6v3" />
    </svg>
  )
);

DeviceWatchSearchOutlineLogo.displayName = "DeviceWatchSearchOutlineLogo";

export const DeviceWatchSearchOutlineLogoMetadata = {
  id: "device-watch-search-outline",
  baseId: "device-watch-search-outline",
  variant: "default",
  name: "Device Watch Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchSearchOutlineLogo;
