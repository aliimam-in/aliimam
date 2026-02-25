/**
 * Auto-generated logo component: Device Usb Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceUsbOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceUsbOutlineLogo = React.forwardRef<SVGSVGElement, DeviceUsbOutlineLogoProps>(
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
      <path d="M7 8h10v8a5 5 0 0 1 -10 0l0 -8" />
  <path d="M9 8v-5h6v5" />
    </svg>
  )
);

DeviceUsbOutlineLogo.displayName = "DeviceUsbOutlineLogo";

export const DeviceUsbOutlineLogoMetadata = {
  id: "device-usb-outline",
  baseId: "device-usb-outline",
  variant: "default",
  name: "Device Usb Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceUsbOutlineLogo;
