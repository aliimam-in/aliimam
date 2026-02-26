/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BluetoothConnectedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BluetoothConnected = React.forwardRef<SVGSVGElement, BluetoothConnectedProps>(
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
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
  <line x1="18" x2="21" y1="12" y2="12" />
  <line x1="3" x2="6" y1="12" y2="12" />
    </svg>
  )
);
BluetoothConnected.displayName = "BluetoothConnected";
export const BluetoothConnectedMetadata = { 
  id: "bluetooth-connected", 
  baseId: "bluetooth-connected", 
  variant: "default", 
  name: "Bluetooth Connected", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BluetoothConnected;
