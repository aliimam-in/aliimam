/**
 * Auto-generated logo component: Device Ipad Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadCheckOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadCheckOutlineLogoProps>(
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
      <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
  <path d="M9 18h2" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

DeviceIpadCheckOutlineLogo.displayName = "DeviceIpadCheckOutlineLogo";

export const DeviceIpadCheckOutlineLogoMetadata = {
  id: "device-ipad-check-outline",
  baseId: "device-ipad-check-outline",
  variant: "default",
  name: "Device Ipad Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadCheckOutlineLogo;
