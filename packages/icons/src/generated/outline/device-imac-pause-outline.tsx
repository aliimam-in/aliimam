/**
 * Auto-generated logo component: Device Imac Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacPauseOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacPauseOutlineLogoProps>(
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
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

DeviceImacPauseOutlineLogo.displayName = "DeviceImacPauseOutlineLogo";

export const DeviceImacPauseOutlineLogoMetadata = {
  id: "device-imac-pause-outline",
  baseId: "device-imac-pause-outline",
  variant: "default",
  name: "Device Imac Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacPauseOutlineLogo;
