/**
 * Auto-generated logo component: Device Tablet X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletXOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletXOutlineLogoProps>(
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
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
  <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    </svg>
  )
);

DeviceTabletXOutlineLogo.displayName = "DeviceTabletXOutlineLogo";

export const DeviceTabletXOutlineLogoMetadata = {
  id: "device-tablet-x-outline",
  baseId: "device-tablet-x-outline",
  variant: "default",
  name: "Device Tablet X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletXOutlineLogo;
