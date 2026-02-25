/**
 * Auto-generated logo component: Device Watch Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchDownOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchDownOutlineLogoProps>(
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
      <path d="M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
  <path d="M9 18v3h3.5" />
  <path d="M9 6v-3h6v3" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
    </svg>
  )
);

DeviceWatchDownOutlineLogo.displayName = "DeviceWatchDownOutlineLogo";

export const DeviceWatchDownOutlineLogoMetadata = {
  id: "device-watch-down-outline",
  baseId: "device-watch-down-outline",
  variant: "default",
  name: "Device Watch Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchDownOutlineLogo;
