/**
 * Auto-generated logo component: Device Imac Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacExclamationOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacExclamationOutlineLogoProps>(
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
      <path d="M15 17h-11a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" />
  <path d="M3 13h13" />
  <path d="M8 21h7" />
  <path d="M10 17l-.5 4" />
  <path d="M14 17l.5 4" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

DeviceImacExclamationOutlineLogo.displayName = "DeviceImacExclamationOutlineLogo";

export const DeviceImacExclamationOutlineLogoMetadata = {
  id: "device-imac-exclamation-outline",
  baseId: "device-imac-exclamation-outline",
  variant: "default",
  name: "Device Imac Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacExclamationOutlineLogo;
