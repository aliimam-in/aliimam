/**
 * Auto-generated logo component: Bluetooth (default)
 * Category: others
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
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </svg>
  )
);

BluetoothLogo.displayName = "BluetoothLogo";

export const BluetoothLogoMetadata = {
  id: "bluetooth",
  baseId: "bluetooth",
  variant: "default",
  name: "Bluetooth",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BluetoothLogo;
