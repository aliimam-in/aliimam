/**
 * Auto-generated logo component: Device Ipad X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadXOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadXOutlineLogoProps>(
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
      <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
  <path d="M13 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v9" />
  <path d="M9 18h4" />
    </svg>
  )
);

DeviceIpadXOutlineLogo.displayName = "DeviceIpadXOutlineLogo";

export const DeviceIpadXOutlineLogoMetadata = {
  id: "device-ipad-x-outline",
  baseId: "device-ipad-x-outline",
  variant: "default",
  name: "Device Ipad X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadXOutlineLogo;
