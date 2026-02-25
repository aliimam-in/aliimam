/**
 * Auto-generated logo component: Device Tablet Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletDownOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletDownOutlineLogoProps>(
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
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
  <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    </svg>
  )
);

DeviceTabletDownOutlineLogo.displayName = "DeviceTabletDownOutlineLogo";

export const DeviceTabletDownOutlineLogoMetadata = {
  id: "device-tablet-down-outline",
  baseId: "device-tablet-down-outline",
  variant: "default",
  name: "Device Tablet Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletDownOutlineLogo;
