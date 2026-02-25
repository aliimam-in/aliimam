/**
 * Auto-generated logo component: Device Tablet Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletBoltOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletBoltOutlineLogoProps>(
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
      <path d="M13.5 21h-7.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
  <path d="M19 16l-2 3h4l-2 3" />
  <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    </svg>
  )
);

DeviceTabletBoltOutlineLogo.displayName = "DeviceTabletBoltOutlineLogo";

export const DeviceTabletBoltOutlineLogoMetadata = {
  id: "device-tablet-bolt-outline",
  baseId: "device-tablet-bolt-outline",
  variant: "default",
  name: "Device Tablet Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletBoltOutlineLogo;
