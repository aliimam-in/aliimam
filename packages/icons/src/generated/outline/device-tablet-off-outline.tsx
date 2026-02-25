/**
 * Auto-generated logo component: Device Tablet Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletOffOutlineLogoProps>(
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
      <path d="M7 3h11a1 1 0 0 1 1 1v11m0 4v1a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-15" />
  <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DeviceTabletOffOutlineLogo.displayName = "DeviceTabletOffOutlineLogo";

export const DeviceTabletOffOutlineLogoMetadata = {
  id: "device-tablet-off-outline",
  baseId: "device-tablet-off-outline",
  variant: "default",
  name: "Device Tablet Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletOffOutlineLogo;
