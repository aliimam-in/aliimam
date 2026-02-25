/**
 * Auto-generated logo component: Device Imac X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacXOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacXOutlineLogoProps>(
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
      <path d="M13 17h-9a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9" />
  <path d="M3 13h18" />
  <path d="M8 21h5" />
  <path d="M10 17l-.5 4" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

DeviceImacXOutlineLogo.displayName = "DeviceImacXOutlineLogo";

export const DeviceImacXOutlineLogoMetadata = {
  id: "device-imac-x-outline",
  baseId: "device-imac-x-outline",
  variant: "default",
  name: "Device Imac X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacXOutlineLogo;
