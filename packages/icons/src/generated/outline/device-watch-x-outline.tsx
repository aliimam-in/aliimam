/**
 * Auto-generated logo component: Device Watch X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchXOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchXOutlineLogoProps>(
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
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

DeviceWatchXOutlineLogo.displayName = "DeviceWatchXOutlineLogo";

export const DeviceWatchXOutlineLogoMetadata = {
  id: "device-watch-x-outline",
  baseId: "device-watch-x-outline",
  variant: "default",
  name: "Device Watch X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchXOutlineLogo;
