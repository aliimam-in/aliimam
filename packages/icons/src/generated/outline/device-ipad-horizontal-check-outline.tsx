/**
 * Auto-generated logo component: Device Ipad Horizontal Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalCheckOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalCheckOutlineLogoProps>(
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
      <path d="M11 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
  <path d="M15 19l2 2l4 -4" />
  <path d="M9 17h2.5" />
    </svg>
  )
);

DeviceIpadHorizontalCheckOutlineLogo.displayName = "DeviceIpadHorizontalCheckOutlineLogo";

export const DeviceIpadHorizontalCheckOutlineLogoMetadata = {
  id: "device-ipad-horizontal-check-outline",
  baseId: "device-ipad-horizontal-check-outline",
  variant: "default",
  name: "Device Ipad Horizontal Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalCheckOutlineLogo;
