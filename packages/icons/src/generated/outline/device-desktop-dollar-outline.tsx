/**
 * Auto-generated logo component: Device Desktop Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopDollarOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopDollarOutlineLogoProps>(
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
      <path d="M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v5.5" />
  <path d="M7 20h6.5" />
  <path d="M9 16v4" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

DeviceDesktopDollarOutlineLogo.displayName = "DeviceDesktopDollarOutlineLogo";

export const DeviceDesktopDollarOutlineLogoMetadata = {
  id: "device-desktop-dollar-outline",
  baseId: "device-desktop-dollar-outline",
  variant: "default",
  name: "Device Desktop Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopDollarOutlineLogo;
