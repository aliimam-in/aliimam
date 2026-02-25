/**
 * Auto-generated logo component: Device Desktop Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopCancelOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopCancelOutlineLogoProps>(
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
      <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
  <path d="M7 20h5" />
  <path d="M9 16v4" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
    </svg>
  )
);

DeviceDesktopCancelOutlineLogo.displayName = "DeviceDesktopCancelOutlineLogo";

export const DeviceDesktopCancelOutlineLogoMetadata = {
  id: "device-desktop-cancel-outline",
  baseId: "device-desktop-cancel-outline",
  variant: "default",
  name: "Device Desktop Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopCancelOutlineLogo;
