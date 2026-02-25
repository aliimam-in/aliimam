/**
 * Auto-generated logo component: Device Watch Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchCodeOutlineLogo = React.forwardRef<SVGSVGElement, DeviceWatchCodeOutlineLogoProps>(
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
      <path d="M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
  <path d="M9 18v3h3" />
  <path d="M9 6v-3h6v3" />
    </svg>
  )
);

DeviceWatchCodeOutlineLogo.displayName = "DeviceWatchCodeOutlineLogo";

export const DeviceWatchCodeOutlineLogoMetadata = {
  id: "device-watch-code-outline",
  baseId: "device-watch-code-outline",
  variant: "default",
  name: "Device Watch Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchCodeOutlineLogo;
