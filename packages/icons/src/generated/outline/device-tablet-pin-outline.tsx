/**
 * Auto-generated logo component: Device Tablet Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletPinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletPinOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletPinOutlineLogoProps>(
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
      <path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v7" />
  <path d="M12 16a1 1 0 0 0 0 2" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
    </svg>
  )
);

DeviceTabletPinOutlineLogo.displayName = "DeviceTabletPinOutlineLogo";

export const DeviceTabletPinOutlineLogoMetadata = {
  id: "device-tablet-pin-outline",
  baseId: "device-tablet-pin-outline",
  variant: "default",
  name: "Device Tablet Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletPinOutlineLogo;
