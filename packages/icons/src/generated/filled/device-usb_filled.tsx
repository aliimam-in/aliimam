/**
 * Auto-generated logo component: Device Usb (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceUsbFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceUsbFilledLogo = React.forwardRef<SVGSVGElement, DeviceUsbFilledLogoProps>(
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
      <path d="M15 2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 1 1v8a6 6 0 1 1 -12 0v-8a1 1 0 0 1 1 -1h1v-4a1 1 0 0 1 1 -1zm-1 2h-4v3h4z" />
    </svg>
  )
);

DeviceUsbFilledLogo.displayName = "DeviceUsbFilledLogo";

export const DeviceUsbFilledLogoMetadata = {
  id: "device-usb_filled",
  baseId: "device-usb",
  variant: "filled",
  name: "Device Usb",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceUsbFilledLogo;
