/**
 * Auto-generated logo component: Device Desktop Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopOffOutlineLogoProps>(
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
      <path d="M8 4h12a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1m-4 0h-12a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1" />
  <path d="M7 20h10" />
  <path d="M9 16v4" />
  <path d="M15 16v4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DeviceDesktopOffOutlineLogo.displayName = "DeviceDesktopOffOutlineLogo";

export const DeviceDesktopOffOutlineLogoMetadata = {
  id: "device-desktop-off-outline",
  baseId: "device-desktop-off-outline",
  variant: "default",
  name: "Device Desktop Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopOffOutlineLogo;
