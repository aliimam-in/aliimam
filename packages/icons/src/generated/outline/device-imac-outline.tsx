/**
 * Auto-generated logo component: Device Imac Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacOutlineLogoProps>(
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
      <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12" />
  <path d="M3 13h18" />
  <path d="M8 21h8" />
  <path d="M10 17l-.5 4" />
  <path d="M14 17l.5 4" />
    </svg>
  )
);

DeviceImacOutlineLogo.displayName = "DeviceImacOutlineLogo";

export const DeviceImacOutlineLogoMetadata = {
  id: "device-imac-outline",
  baseId: "device-imac-outline",
  variant: "default",
  name: "Device Imac Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacOutlineLogo;
