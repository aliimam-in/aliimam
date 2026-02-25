/**
 * Auto-generated logo component: Device Imac Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacOffOutlineLogoProps>(
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
      <path d="M7 3h13a1 1 0 0 1 1 1v12c0 .28 -.115 .532 -.3 .713m-3.7 .287h-13a1 1 0 0 1 -1 -1v-12c0 -.276 .112 -.526 .293 -.707" />
  <path d="M3 13h10m4 0h4" />
  <path d="M8 21h8" />
  <path d="M10 17l-.5 4" />
  <path d="M14 17l.5 4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DeviceImacOffOutlineLogo.displayName = "DeviceImacOffOutlineLogo";

export const DeviceImacOffOutlineLogoMetadata = {
  id: "device-imac-off-outline",
  baseId: "device-imac-off-outline",
  variant: "default",
  name: "Device Imac Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacOffOutlineLogo;
