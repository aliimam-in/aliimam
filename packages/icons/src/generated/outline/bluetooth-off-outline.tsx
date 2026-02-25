/**
 * Auto-generated logo component: Bluetooth Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BluetoothOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BluetoothOffOutlineLogo = React.forwardRef<SVGSVGElement, BluetoothOffOutlineLogoProps>(
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
      <path d="M3 3l18 18" />
  <path d="M16.438 16.45l-4.438 3.55v-8m0 -4v-4l5 4l-2.776 2.22m-2.222 1.779l-5 4" />
    </svg>
  )
);

BluetoothOffOutlineLogo.displayName = "BluetoothOffOutlineLogo";

export const BluetoothOffOutlineLogoMetadata = {
  id: "bluetooth-off-outline",
  baseId: "bluetooth-off-outline",
  variant: "default",
  name: "Bluetooth Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BluetoothOffOutlineLogo;
