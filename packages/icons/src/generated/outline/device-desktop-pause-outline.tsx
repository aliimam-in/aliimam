/**
 * Auto-generated logo component: Device Desktop Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopPauseOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopPauseOutlineLogoProps>(
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
      <path d="M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
  <path d="M7 20h6" />
  <path d="M9 16v4" />
    </svg>
  )
);

DeviceDesktopPauseOutlineLogo.displayName = "DeviceDesktopPauseOutlineLogo";

export const DeviceDesktopPauseOutlineLogoMetadata = {
  id: "device-desktop-pause-outline",
  baseId: "device-desktop-pause-outline",
  variant: "default",
  name: "Device Desktop Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopPauseOutlineLogo;
