/**
 * Auto-generated logo component: Device Gamepad 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceGamepad2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceGamepad2OutlineLogo = React.forwardRef<SVGSVGElement, DeviceGamepad2OutlineLogoProps>(
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
      <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4" />
  <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" />
  <path d="M8 9v2" />
  <path d="M7 10h2" />
  <path d="M14 10h2" />
    </svg>
  )
);

DeviceGamepad2OutlineLogo.displayName = "DeviceGamepad2OutlineLogo";

export const DeviceGamepad2OutlineLogoMetadata = {
  id: "device-gamepad-2-outline",
  baseId: "device-gamepad-2-outline",
  variant: "default",
  name: "Device Gamepad 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceGamepad2OutlineLogo;
