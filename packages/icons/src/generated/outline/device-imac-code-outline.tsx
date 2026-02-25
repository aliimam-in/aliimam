/**
 * Auto-generated logo component: Device Imac Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacCodeOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacCodeOutlineLogoProps>(
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
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

DeviceImacCodeOutlineLogo.displayName = "DeviceImacCodeOutlineLogo";

export const DeviceImacCodeOutlineLogoMetadata = {
  id: "device-imac-code-outline",
  baseId: "device-imac-code-outline",
  variant: "default",
  name: "Device Imac Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacCodeOutlineLogo;
