/**
 * Auto-generated logo component: Device Tablet Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletCheckOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletCheckOutlineLogoProps>(
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
      <path d="M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" />
  <path d="M12.314 16.05a1 1 0 0 0 -1.042 1.635" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

DeviceTabletCheckOutlineLogo.displayName = "DeviceTabletCheckOutlineLogo";

export const DeviceTabletCheckOutlineLogoMetadata = {
  id: "device-tablet-check-outline",
  baseId: "device-tablet-check-outline",
  variant: "default",
  name: "Device Tablet Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletCheckOutlineLogo;
