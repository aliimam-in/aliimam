/**
 * Auto-generated logo component: Device Watch Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchExclamationOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchExclamationOutlineLogoProps>(
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
      <path d="M15 18h-6a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
  <path d="M9 18v3h6v-3" />
  <path d="M9 6v-3h6v3" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

DeviceWatchExclamationOutlineLogo.displayName = "DeviceWatchExclamationOutlineLogo";

export const DeviceWatchExclamationOutlineLogoMetadata = {
  id: "device-watch-exclamation-outline",
  baseId: "device-watch-exclamation-outline",
  variant: "default",
  name: "Device Watch Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchExclamationOutlineLogo;
