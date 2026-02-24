/**
 * Auto-generated logo component: Bluetooth (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BluetoothLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BluetoothLogo = React.forwardRef<SVGSVGElement, BluetoothLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>
    </svg>
  )
);

BluetoothLogo.displayName = "BluetoothLogo";

export const BluetoothLogoMetadata = {
  id: "bluetooth",
  baseId: "bluetooth",
  variant: "default",
  name: "Bluetooth",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BluetoothLogo;
