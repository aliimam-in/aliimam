/**
 * Auto-generated logo component: Device Desktop Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopUpOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopUpOutlineLogoProps>(
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
      <path d="M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
  <path d="M7 20h5" />
  <path d="M9 16v4" />
    </svg>
  )
);

DeviceDesktopUpOutlineLogo.displayName = "DeviceDesktopUpOutlineLogo";

export const DeviceDesktopUpOutlineLogoMetadata = {
  id: "device-desktop-up-outline",
  baseId: "device-desktop-up-outline",
  variant: "default",
  name: "Device Desktop Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopUpOutlineLogo;
