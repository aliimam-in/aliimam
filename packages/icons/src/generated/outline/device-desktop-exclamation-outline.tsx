/**
 * Auto-generated logo component: Device Desktop Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopExclamationOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopExclamationOutlineLogoProps>(
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
      <path d="M15 16h-11a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7" />
  <path d="M7 20h8" />
  <path d="M9 16v4" />
  <path d="M15 16v4" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

DeviceDesktopExclamationOutlineLogo.displayName = "DeviceDesktopExclamationOutlineLogo";

export const DeviceDesktopExclamationOutlineLogoMetadata = {
  id: "device-desktop-exclamation-outline",
  baseId: "device-desktop-exclamation-outline",
  variant: "default",
  name: "Device Desktop Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopExclamationOutlineLogo;
