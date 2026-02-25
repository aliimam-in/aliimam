/**
 * Auto-generated logo component: Device Imac (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacFilledLogo = React.forwardRef<SVGSVGElement, DeviceImacFilledLogoProps>(
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
      <path d="M8 22a1 1 0 0 1 0 -2h.616l.25 -2h-4.866a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-4.867l.25 2h.617a1 1 0 0 1 0 2zm5.116 -4h-2.233l-.25 2h2.733z" />
    </svg>
  )
);

DeviceImacFilledLogo.displayName = "DeviceImacFilledLogo";

export const DeviceImacFilledLogoMetadata = {
  id: "device-imac_filled",
  baseId: "device-imac",
  variant: "filled",
  name: "Device Imac",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacFilledLogo;
