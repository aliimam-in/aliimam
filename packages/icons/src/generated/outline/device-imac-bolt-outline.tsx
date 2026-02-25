/**
 * Auto-generated logo component: Device Imac Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacBoltOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacBoltOutlineLogoProps>(
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
      <path d="M13.5 17h-9.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" />
  <path d="M3 13h13" />
  <path d="M8 21h5.5" />
  <path d="M10 17l-.5 4" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

DeviceImacBoltOutlineLogo.displayName = "DeviceImacBoltOutlineLogo";

export const DeviceImacBoltOutlineLogoMetadata = {
  id: "device-imac-bolt-outline",
  baseId: "device-imac-bolt-outline",
  variant: "default",
  name: "Device Imac Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacBoltOutlineLogo;
