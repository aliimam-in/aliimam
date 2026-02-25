/**
 * Auto-generated logo component: Device Tablet Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletPlusOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletPlusOutlineLogoProps>(
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
      <path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
  <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    </svg>
  )
);

DeviceTabletPlusOutlineLogo.displayName = "DeviceTabletPlusOutlineLogo";

export const DeviceTabletPlusOutlineLogoMetadata = {
  id: "device-tablet-plus-outline",
  baseId: "device-tablet-plus-outline",
  variant: "default",
  name: "Device Tablet Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletPlusOutlineLogo;
