/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BluetoothSearchingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BluetoothSearching = React.forwardRef<SVGSVGElement, BluetoothSearchingProps>(
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
  <path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
  <path d="M18 12h.01" />
    </svg>
  )
);
BluetoothSearching.displayName = "BluetoothSearching";
export const BluetoothSearchingMetadata = { 
  id: "bluetooth-searching", 
  baseId: "bluetooth-searching", 
  variant: "default", 
  name: "Bluetooth Searching", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BluetoothSearching;
