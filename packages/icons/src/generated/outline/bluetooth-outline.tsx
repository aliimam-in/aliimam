/**
 * Auto-generated logo component: Bluetooth Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BluetoothOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BluetoothOutlineLogo = React.forwardRef<SVGSVGElement, BluetoothOutlineLogoProps>(
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
    </svg>
  )
);

BluetoothOutlineLogo.displayName = "BluetoothOutlineLogo";

export const BluetoothOutlineLogoMetadata = {
  id: "bluetooth-outline",
  baseId: "bluetooth-outline",
  variant: "default",
  name: "Bluetooth Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BluetoothOutlineLogo;
