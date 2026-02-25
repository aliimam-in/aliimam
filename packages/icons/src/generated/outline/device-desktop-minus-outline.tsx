/**
 * Auto-generated logo component: Device Desktop Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopMinusOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopMinusOutlineLogoProps>(
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
      <path d="M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10" />
  <path d="M7 20h5" />
  <path d="M9 16v4" />
  <path d="M16 19h6" />
    </svg>
  )
);

DeviceDesktopMinusOutlineLogo.displayName = "DeviceDesktopMinusOutlineLogo";

export const DeviceDesktopMinusOutlineLogoMetadata = {
  id: "device-desktop-minus-outline",
  baseId: "device-desktop-minus-outline",
  variant: "default",
  name: "Device Desktop Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopMinusOutlineLogo;
