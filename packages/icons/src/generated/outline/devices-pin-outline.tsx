/**
 * Auto-generated logo component: Devices Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesPinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesPinOutlineLogo = React.forwardRef<SVGSVGElement, DevicesPinOutlineLogoProps>(
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
      <path d="M13 14v-5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
  <path d="M16 9h2" />
    </svg>
  )
);

DevicesPinOutlineLogo.displayName = "DevicesPinOutlineLogo";

export const DevicesPinOutlineLogoMetadata = {
  id: "devices-pin-outline",
  baseId: "devices-pin-outline",
  variant: "default",
  name: "Devices Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesPinOutlineLogo;
