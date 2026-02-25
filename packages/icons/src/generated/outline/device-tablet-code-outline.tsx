/**
 * Auto-generated logo component: Device Tablet Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletCodeOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletCodeOutlineLogoProps>(
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
      <path d="M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9" />
  <path d="M12.344 16.06a1 1 0 0 0 -1.07 1.627" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

DeviceTabletCodeOutlineLogo.displayName = "DeviceTabletCodeOutlineLogo";

export const DeviceTabletCodeOutlineLogoMetadata = {
  id: "device-tablet-code-outline",
  baseId: "device-tablet-code-outline",
  variant: "default",
  name: "Device Tablet Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletCodeOutlineLogo;
