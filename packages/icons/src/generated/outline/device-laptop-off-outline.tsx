/**
 * Auto-generated logo component: Device Laptop Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceLaptopOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceLaptopOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceLaptopOffOutlineLogoProps>(
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
      <path d="M3 19h16" />
  <path d="M10 6h8a1 1 0 0 1 1 1v8m-3 1h-10a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DeviceLaptopOffOutlineLogo.displayName = "DeviceLaptopOffOutlineLogo";

export const DeviceLaptopOffOutlineLogoMetadata = {
  id: "device-laptop-off-outline",
  baseId: "device-laptop-off-outline",
  variant: "default",
  name: "Device Laptop Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceLaptopOffOutlineLogo;
