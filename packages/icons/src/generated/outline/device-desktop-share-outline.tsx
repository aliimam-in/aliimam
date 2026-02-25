/**
 * Auto-generated logo component: Device Desktop Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopShareOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopShareOutlineLogoProps>(
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
      <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
  <path d="M7 20h5.5" />
  <path d="M9 16v4" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

DeviceDesktopShareOutlineLogo.displayName = "DeviceDesktopShareOutlineLogo";

export const DeviceDesktopShareOutlineLogoMetadata = {
  id: "device-desktop-share-outline",
  baseId: "device-desktop-share-outline",
  variant: "default",
  name: "Device Desktop Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopShareOutlineLogo;
