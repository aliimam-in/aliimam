/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BluetoothRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BluetoothRounded = React.forwardRef<SVGSVGElement, BluetoothRoundedProps>(
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
      <path d="M5.64001 18.64L17.99 7.31998C18.5 6.84998 18.49 6.09997 17.95 5.64997L14.1 2.43998C13.1 1.60998 12.28 1.98998 12.28 3.28998V20.71C12.28 22.01 13.1 22.39 14.1 21.56L17.95 18.35C18.49 17.9 18.5 17.15 17.99 16.68L5.64001 5.35996"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BluetoothRounded.displayName = "BluetoothRounded";
export const BluetoothRoundedMetadata = { 
  id: "bluetooth_rounded", 
  baseId: "bluetooth", 
  variant: "rounded", 
  name: "Bluetooth", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BluetoothRounded;
