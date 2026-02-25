/**
 * Auto-generated logo component: Device Remote Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceRemoteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceRemoteOutlineLogo = React.forwardRef<SVGSVGElement, DeviceRemoteOutlineLogoProps>(
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
      <path d="M10 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -14" />
  <path d="M12 3v2" />
  <path d="M10 15v.01" />
  <path d="M10 18v.01" />
  <path d="M14 18v.01" />
  <path d="M14 15v.01" />
    </svg>
  )
);

DeviceRemoteOutlineLogo.displayName = "DeviceRemoteOutlineLogo";

export const DeviceRemoteOutlineLogoMetadata = {
  id: "device-remote-outline",
  baseId: "device-remote-outline",
  variant: "default",
  name: "Device Remote Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceRemoteOutlineLogo;
