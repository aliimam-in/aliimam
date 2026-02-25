/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DeviceIpadFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DeviceIpadFilled = React.forwardRef<SVGSVGElement, DeviceIpadFilledProps>(
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
      <path d="M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-3 16h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2" />
    </svg>
  )
);
DeviceIpadFilled.displayName = "DeviceIpadFilled";
export const DeviceIpadFilledMetadata = { 
  id: "device-ipad_filled", 
  baseId: "device-ipad", 
  variant: "filled", 
  name: "Device Ipad", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DeviceIpadFilled;
