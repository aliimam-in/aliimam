/**
 * Auto-generated logo component: Device Ipad Horizontal X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalXOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalXOutlineLogoProps>(
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
      <path d="M13.5 20h-8.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
  <path d="M9 17h4" />
    </svg>
  )
);

DeviceIpadHorizontalXOutlineLogo.displayName = "DeviceIpadHorizontalXOutlineLogo";

export const DeviceIpadHorizontalXOutlineLogoMetadata = {
  id: "device-ipad-horizontal-x-outline",
  baseId: "device-ipad-horizontal-x-outline",
  variant: "default",
  name: "Device Ipad Horizontal X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalXOutlineLogo;
