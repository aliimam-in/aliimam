/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BluetoothProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bluetooth = React.forwardRef<SVGSVGElement, BluetoothProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </svg>
  )
);
Bluetooth.displayName = "Bluetooth";
export const BluetoothMetadata = { id: "bluetooth", baseId: "bluetooth", variant: "default", name: "Bluetooth", category: "app", tags: [], viewBox: "0 0 24 24" } as const;
export default Bluetooth;
