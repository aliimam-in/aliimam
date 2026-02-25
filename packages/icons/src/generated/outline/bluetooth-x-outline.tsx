/**
 * Auto-generated logo component: Bluetooth X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BluetoothXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BluetoothXOutlineLogo = React.forwardRef<SVGSVGElement, BluetoothXOutlineLogoProps>(
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
      <path d="M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802" />
  <path d="M16 6l4 4" />
  <path d="M20 6l-4 4" />
    </svg>
  )
);

BluetoothXOutlineLogo.displayName = "BluetoothXOutlineLogo";

export const BluetoothXOutlineLogoMetadata = {
  id: "bluetooth-x-outline",
  baseId: "bluetooth-x-outline",
  variant: "default",
  name: "Bluetooth X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BluetoothXOutlineLogo;
