/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DeviceUsbFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DeviceUsbFilled = React.forwardRef<SVGSVGElement, DeviceUsbFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M15 2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 1 1v8a6 6 0 1 1 -12 0v-8a1 1 0 0 1 1 -1h1v-4a1 1 0 0 1 1 -1zm-1 2h-4v3h4z" />
    </svg>
  )
);
DeviceUsbFilled.displayName = "DeviceUsbFilled";
export const DeviceUsbFilledMetadata = { 
  id: "device-usb_filled", 
  baseId: "device-usb", 
  variant: "filled", 
  name: "Device Usb", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DeviceUsbFilled;
