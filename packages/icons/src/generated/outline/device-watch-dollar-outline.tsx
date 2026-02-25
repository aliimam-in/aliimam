/**
 * Auto-generated logo component: Device Watch Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchDollarOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchDollarOutlineLogoProps>(
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
      <path d="M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v1" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
  <path d="M9 18v3h4" />
  <path d="M9 6v-3h6v3" />
    </svg>
  )
);

DeviceWatchDollarOutlineLogo.displayName = "DeviceWatchDollarOutlineLogo";

export const DeviceWatchDollarOutlineLogoMetadata = {
  id: "device-watch-dollar-outline",
  baseId: "device-watch-dollar-outline",
  variant: "default",
  name: "Device Watch Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchDollarOutlineLogo;
