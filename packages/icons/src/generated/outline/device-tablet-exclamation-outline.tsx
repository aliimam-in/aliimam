/**
 * Auto-generated logo component: Device Tablet Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletExclamationOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletExclamationOutlineLogoProps>(
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
      <path d="M15 21h-9a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
  <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

DeviceTabletExclamationOutlineLogo.displayName = "DeviceTabletExclamationOutlineLogo";

export const DeviceTabletExclamationOutlineLogoMetadata = {
  id: "device-tablet-exclamation-outline",
  baseId: "device-tablet-exclamation-outline",
  variant: "default",
  name: "Device Tablet Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletExclamationOutlineLogo;
