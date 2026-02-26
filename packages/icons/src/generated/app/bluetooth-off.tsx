/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BluetoothOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BluetoothOff = React.forwardRef<SVGSVGElement, BluetoothOffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m17 17-5 5V12l-5 5" />
  <path d="m2 2 20 20" />
  <path d="M14.5 9.5 17 7l-5-5v4.5" />
    </svg>
  )
);
BluetoothOff.displayName = "BluetoothOff";
export const BluetoothOffMetadata = { 
  id: "bluetooth-off", 
  baseId: "bluetooth-off", 
  variant: "default", 
  name: "Bluetooth Off", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BluetoothOff;
