/**
 * Auto-generated logo component: Device Computer Camera Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceComputerCameraOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceComputerCameraOutlineLogo = React.forwardRef<SVGSVGElement, DeviceComputerCameraOutlineLogoProps>(
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
      <path d="M5 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486" />
    </svg>
  )
);

DeviceComputerCameraOutlineLogo.displayName = "DeviceComputerCameraOutlineLogo";

export const DeviceComputerCameraOutlineLogoMetadata = {
  id: "device-computer-camera-outline",
  baseId: "device-computer-camera-outline",
  variant: "default",
  name: "Device Computer Camera Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceComputerCameraOutlineLogo;
