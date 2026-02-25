/**
 * Auto-generated logo component: Device Watch Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceWatchFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceWatchFilledLogo = React.forwardRef<SVGSVGElement, DeviceWatchFilledLogoProps>(
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
      <path d="M15 2a1 1 0 0 1 1 1v2.126c1.726 .445 3 2.01 3 3.874v6a4 4 0 0 1 -3 3.874v2.126a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2.126a4 4 0 0 1 -3 -3.874v-6a4 4 0 0 1 3 -3.874v-2.126a1 1 0 0 1 1 -1zm-1 17h-4v1h4zm0 -15h-4v1h4z" />
    </svg>
  )
);

DeviceWatchFilledLogo.displayName = "DeviceWatchFilledLogo";

export const DeviceWatchFilledLogoMetadata = {
  id: "device-watch-filled",
  baseId: "device-watch-filled",
  variant: "default",
  name: "Device Watch Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceWatchFilledLogo;
