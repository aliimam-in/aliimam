/**
 * Auto-generated logo component: Bluetooth Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BluetoothOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BluetoothOffLogo = React.forwardRef<SVGSVGElement, BluetoothOffLogoProps>(
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
      <path d="m17 17-5 5V12l-5 5" />
  <path d="m2 2 20 20" />
  <path d="M14.5 9.5 17 7l-5-5v4.5" />
    </svg>
  )
);

BluetoothOffLogo.displayName = "BluetoothOffLogo";

export const BluetoothOffLogoMetadata = {
  id: "bluetooth-off",
  baseId: "bluetooth-off",
  variant: "default",
  name: "Bluetooth Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BluetoothOffLogo;
