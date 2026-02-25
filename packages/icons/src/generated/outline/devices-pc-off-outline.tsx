/**
 * Auto-generated logo component: Devices Pc Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesPcOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesPcOffOutlineLogo = React.forwardRef<SVGSVGElement, DevicesPcOffOutlineLogoProps>(
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
      <path d="M9 9v10h-6v-14h2" />
  <path d="M13 9h9v7h-2m-4 0h-4v-4" />
  <path d="M14 19h5" />
  <path d="M17 17v2" />
  <path d="M6 13v.01" />
  <path d="M6 16v.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DevicesPcOffOutlineLogo.displayName = "DevicesPcOffOutlineLogo";

export const DevicesPcOffOutlineLogoMetadata = {
  id: "devices-pc-off-outline",
  baseId: "devices-pc-off-outline",
  variant: "default",
  name: "Devices Pc Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesPcOffOutlineLogo;
