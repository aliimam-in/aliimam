/**
 * Auto-generated logo component: Device Gamepad Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceGamepadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceGamepadOutlineLogo = React.forwardRef<SVGSVGElement, DeviceGamepadOutlineLogoProps>(
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
      <path d="M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M6 12h4m-2 -2v4" />
  <path d="M15 11l0 .01" />
  <path d="M18 13l0 .01" />
    </svg>
  )
);

DeviceGamepadOutlineLogo.displayName = "DeviceGamepadOutlineLogo";

export const DeviceGamepadOutlineLogoMetadata = {
  id: "device-gamepad-outline",
  baseId: "device-gamepad-outline",
  variant: "default",
  name: "Device Gamepad Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceGamepadOutlineLogo;
