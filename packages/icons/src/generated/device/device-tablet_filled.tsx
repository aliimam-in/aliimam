/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DeviceTabletFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DeviceTabletFilled = React.forwardRef<SVGSVGElement, DeviceTabletFilledProps>(
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
      <path d="M18 2a2 2 0 0 1 1.995 1.85l.005 .15v16a2 2 0 0 1 -1.85 1.995l-.15 .005h-12a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-16a2 2 0 0 1 1.85 -1.995l.15 -.005h12zm-6 13a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
    </svg>
  )
);
DeviceTabletFilled.displayName = "DeviceTabletFilled";
export const DeviceTabletFilledMetadata = { 
  id: "device-tablet_filled", 
  baseId: "device-tablet", 
  variant: "filled", 
  name: "Device Tablet", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DeviceTabletFilled;
