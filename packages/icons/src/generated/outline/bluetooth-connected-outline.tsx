/**
 * Auto-generated logo component: Bluetooth Connected Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BluetoothConnectedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BluetoothConnectedOutlineLogo = React.forwardRef<SVGSVGElement, BluetoothConnectedOutlineLogoProps>(
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
      <path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
  <path d="M4 12l1 0" />
  <path d="M18 12l1 0" />
    </svg>
  )
);

BluetoothConnectedOutlineLogo.displayName = "BluetoothConnectedOutlineLogo";

export const BluetoothConnectedOutlineLogoMetadata = {
  id: "bluetooth-connected-outline",
  baseId: "bluetooth-connected-outline",
  variant: "default",
  name: "Bluetooth Connected Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BluetoothConnectedOutlineLogo;
