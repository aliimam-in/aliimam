/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DeviceDesktopFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DeviceDesktopFilled = React.forwardRef<SVGSVGElement, DeviceDesktopFilledProps>(
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
      <path d="M7 21a1 1 0 0 1 0 -2h1v-2h-4a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-4v2h1a1 1 0 0 1 0 2zm7 -4h-4v2h4z" />
    </svg>
  )
);
DeviceDesktopFilled.displayName = "DeviceDesktopFilled";
export const DeviceDesktopFilledMetadata = { 
  id: "device-desktop_filled", 
  baseId: "device-desktop", 
  variant: "filled", 
  name: "Device Desktop", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DeviceDesktopFilled;
