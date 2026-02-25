/**
 * Auto-generated logo component: Device Ipad Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadFilledLogo = React.forwardRef<SVGSVGElement, DeviceIpadFilledLogoProps>(
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
      <path d="M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-3 16h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2" />
    </svg>
  )
);

DeviceIpadFilledLogo.displayName = "DeviceIpadFilledLogo";

export const DeviceIpadFilledLogoMetadata = {
  id: "device-ipad-filled",
  baseId: "device-ipad-filled",
  variant: "default",
  name: "Device Ipad Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadFilledLogo;
