/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BluetoothRectangleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BluetoothRectangleRounded = React.forwardRef<SVGSVGElement, BluetoothRectangleRoundedProps>(
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
      <path d="M8.58997 15.56L15.21 9.49002C15.49 9.24002 15.48 8.84004 15.19 8.60004L13.13 6.88004C12.59 6.43004 12.16 6.64003 12.16 7.34003V16.67C12.16 17.37 12.6 17.57 13.13 17.13L15.19 15.41C15.48 15.17 15.49 14.77 15.21 14.52L8.58997 8.45005" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H15C18 2 20 4 20 7V17C20 20 18 22 15 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BluetoothRectangleRounded.displayName = "BluetoothRectangleRounded";
export const BluetoothRectangleRoundedMetadata = { 
  id: "bluetooth-rectangle_rounded", 
  baseId: "bluetooth-rectangle", 
  variant: "rounded", 
  name: "Bluetooth Rectangle", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BluetoothRectangleRounded;
