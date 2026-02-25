/**
 * Auto-generated logo component: Device Imac Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacCheckOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacCheckOutlineLogoProps>(
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
      <path d="M11.5 17h-7.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9" />
  <path d="M3 13h18" />
  <path d="M8 21h3.5" />
  <path d="M10 17l-.5 4" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

DeviceImacCheckOutlineLogo.displayName = "DeviceImacCheckOutlineLogo";

export const DeviceImacCheckOutlineLogoMetadata = {
  id: "device-imac-check-outline",
  baseId: "device-imac-check-outline",
  variant: "default",
  name: "Device Imac Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacCheckOutlineLogo;
