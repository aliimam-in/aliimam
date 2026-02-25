/**
 * Auto-generated logo component: Device Sim Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceSimOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceSimOutlineLogo = React.forwardRef<SVGSVGElement, DeviceSimOutlineLogoProps>(
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
      <path d="M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1" />
  <path d="M9 11h3v6" />
  <path d="M15 17v.01" />
  <path d="M15 14v.01" />
  <path d="M15 11v.01" />
  <path d="M9 14v.01" />
  <path d="M9 17v.01" />
    </svg>
  )
);

DeviceSimOutlineLogo.displayName = "DeviceSimOutlineLogo";

export const DeviceSimOutlineLogoMetadata = {
  id: "device-sim-outline",
  baseId: "device-sim-outline",
  variant: "default",
  name: "Device Sim Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceSimOutlineLogo;
