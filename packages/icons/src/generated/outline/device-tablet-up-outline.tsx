/**
 * Auto-generated logo component: Device Tablet Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletUpOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletUpOutlineLogoProps>(
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
      <path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
  <path d="M12.906 16.576a1 1 0 1 0 -.906 1.424" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

DeviceTabletUpOutlineLogo.displayName = "DeviceTabletUpOutlineLogo";

export const DeviceTabletUpOutlineLogoMetadata = {
  id: "device-tablet-up-outline",
  baseId: "device-tablet-up-outline",
  variant: "default",
  name: "Device Tablet Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletUpOutlineLogo;
