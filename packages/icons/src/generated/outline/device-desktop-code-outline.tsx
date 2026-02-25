/**
 * Auto-generated logo component: Device Desktop Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceDesktopCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceDesktopCodeOutlineLogo = React.forwardRef<SVGSVGElement, DeviceDesktopCodeOutlineLogoProps>(
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
      <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
  <path d="M7 20h4" />
  <path d="M9 16v4" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

DeviceDesktopCodeOutlineLogo.displayName = "DeviceDesktopCodeOutlineLogo";

export const DeviceDesktopCodeOutlineLogoMetadata = {
  id: "device-desktop-code-outline",
  baseId: "device-desktop-code-outline",
  variant: "default",
  name: "Device Desktop Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceDesktopCodeOutlineLogo;
