/**
 * Auto-generated logo component: Device Desktop Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopCheckOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopCheckOutlineLogoProps>(
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
      <path d="M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
  <path d="M15 19l2 2l4 -4" />
  <path d="M7 20h4" />
  <path d="M9 16v4" />
    </svg>
  )
);

DeviceDesktopCheckOutlineLogo.displayName = "DeviceDesktopCheckOutlineLogo";

export const DeviceDesktopCheckOutlineLogoMetadata = {
  id: "device-desktop-check-outline",
  baseId: "device-desktop-check-outline",
  variant: "default",
  name: "Device Desktop Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopCheckOutlineLogo;
