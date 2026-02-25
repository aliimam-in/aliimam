/**
 * Auto-generated logo component: Device Imac Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacUpOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacUpOutlineLogoProps>(
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
      <path d="M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" />
  <path d="M3 13h13" />
  <path d="M8 21h4.5" />
  <path d="M10 17l-.5 4" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

DeviceImacUpOutlineLogo.displayName = "DeviceImacUpOutlineLogo";

export const DeviceImacUpOutlineLogoMetadata = {
  id: "device-imac-up-outline",
  baseId: "device-imac-up-outline",
  variant: "default",
  name: "Device Imac Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacUpOutlineLogo;
