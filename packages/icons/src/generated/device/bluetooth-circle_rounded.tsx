/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BluetoothCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BluetoothCircleRounded = React.forwardRef<SVGSVGElement, BluetoothCircleRoundedProps>(
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
      <path d="M8.58997 15.56L15.21 9.49002C15.49 9.24002 15.48 8.84004 15.19 8.60004L13.13 6.88004C12.59 6.43004 12.16 6.64003 12.16 7.34003V16.67C12.16 17.37 12.6 17.57 13.13 17.13L15.19 15.41C15.48 15.17 15.49 14.77 15.21 14.52L8.58997 8.45005"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BluetoothCircleRounded.displayName = "BluetoothCircleRounded";
export const BluetoothCircleRoundedMetadata = { 
  id: "bluetooth-circle_rounded", 
  baseId: "bluetooth-circle", 
  variant: "rounded", 
  name: "Bluetooth Circle", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BluetoothCircleRounded;
