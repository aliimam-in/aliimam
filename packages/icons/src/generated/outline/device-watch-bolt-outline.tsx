/**
 * Auto-generated logo component: Device Watch Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchBoltOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchBoltOutlineLogoProps>(
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
      <path d="M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
  <path d="M9 18v3h4.5" />
  <path d="M9 6v-3h6v3" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

DeviceWatchBoltOutlineLogo.displayName = "DeviceWatchBoltOutlineLogo";

export const DeviceWatchBoltOutlineLogoMetadata = {
  id: "device-watch-bolt-outline",
  baseId: "device-watch-bolt-outline",
  variant: "default",
  name: "Device Watch Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchBoltOutlineLogo;
