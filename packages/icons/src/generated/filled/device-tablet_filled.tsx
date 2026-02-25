/**
 * Auto-generated logo component: Device Tablet (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletFilledLogo = React.forwardRef<SVGSVGElement, DeviceTabletFilledLogoProps>(
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
      <path d="M18 2a2 2 0 0 1 1.995 1.85l.005 .15v16a2 2 0 0 1 -1.85 1.995l-.15 .005h-12a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-16a2 2 0 0 1 1.85 -1.995l.15 -.005h12zm-6 13a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
    </svg>
  )
);

DeviceTabletFilledLogo.displayName = "DeviceTabletFilledLogo";

export const DeviceTabletFilledLogoMetadata = {
  id: "device-tablet_filled",
  baseId: "device-tablet",
  variant: "filled",
  name: "Device Tablet",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletFilledLogo;
