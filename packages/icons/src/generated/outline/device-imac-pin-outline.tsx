/**
 * Auto-generated logo component: Device Imac Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacPinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacPinOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacPinOutlineLogoProps>(
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
      <path d="M12 17h-8a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
  <path d="M3 13h11" />
  <path d="M8 21h4.5" />
  <path d="M10 17l-.5 4" />
    </svg>
  )
);

DeviceImacPinOutlineLogo.displayName = "DeviceImacPinOutlineLogo";

export const DeviceImacPinOutlineLogoMetadata = {
  id: "device-imac-pin-outline",
  baseId: "device-imac-pin-outline",
  variant: "default",
  name: "Device Imac Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacPinOutlineLogo;
