/**
 * Auto-generated logo component: Device Desktop Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopBoltOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopBoltOutlineLogoProps>(
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
      <path d="M14.5 16h-10.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
  <path d="M7 20h6" />
  <path d="M9 16v4" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

DeviceDesktopBoltOutlineLogo.displayName = "DeviceDesktopBoltOutlineLogo";

export const DeviceDesktopBoltOutlineLogoMetadata = {
  id: "device-desktop-bolt-outline",
  baseId: "device-desktop-bolt-outline",
  variant: "default",
  name: "Device Desktop Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopBoltOutlineLogo;
