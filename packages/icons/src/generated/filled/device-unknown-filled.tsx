/**
 * Auto-generated logo component: Device Unknown Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceUnknownFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceUnknownFilledLogo = React.forwardRef<SVGSVGElement, DeviceUnknownFilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 13a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.526 1.292a.98 .98 0 0 1 1.195 -.239a1 1 0 0 1 -.455 1.892a1 1 0 0 0 -.006 2a3 3 0 0 0 1.371 -5.673" />
    </svg>
  )
);

DeviceUnknownFilledLogo.displayName = "DeviceUnknownFilledLogo";

export const DeviceUnknownFilledLogoMetadata = {
  id: "device-unknown-filled",
  baseId: "device-unknown-filled",
  variant: "default",
  name: "Device Unknown Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceUnknownFilledLogo;
