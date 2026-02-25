/**
 * Auto-generated logo component: Device Laptop Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceLaptopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceLaptopOutlineLogo = React.forwardRef<SVGSVGElement, DeviceLaptopOutlineLogoProps>(
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
      <path d="M3 19l18 0" />
  <path d="M5 7a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8" />
    </svg>
  )
);

DeviceLaptopOutlineLogo.displayName = "DeviceLaptopOutlineLogo";

export const DeviceLaptopOutlineLogoMetadata = {
  id: "device-laptop-outline",
  baseId: "device-laptop-outline",
  variant: "default",
  name: "Device Laptop Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceLaptopOutlineLogo;
