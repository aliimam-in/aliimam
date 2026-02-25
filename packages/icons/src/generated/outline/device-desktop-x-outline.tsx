/**
 * Auto-generated logo component: Device Desktop X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopXOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopXOutlineLogoProps>(
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
      <path d="M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
  <path d="M7 20h6.5" />
  <path d="M9 16v4" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

DeviceDesktopXOutlineLogo.displayName = "DeviceDesktopXOutlineLogo";

export const DeviceDesktopXOutlineLogoMetadata = {
  id: "device-desktop-x-outline",
  baseId: "device-desktop-x-outline",
  variant: "default",
  name: "Device Desktop X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopXOutlineLogo;
