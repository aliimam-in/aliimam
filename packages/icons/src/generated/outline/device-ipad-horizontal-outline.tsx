/**
 * Auto-generated logo component: Device Ipad Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalOutlineLogoProps>(
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
      <path d="M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-12" />
  <path d="M9 17h6" />
    </svg>
  )
);

DeviceIpadHorizontalOutlineLogo.displayName = "DeviceIpadHorizontalOutlineLogo";

export const DeviceIpadHorizontalOutlineLogoMetadata = {
  id: "device-ipad-horizontal-outline",
  baseId: "device-ipad-horizontal-outline",
  variant: "default",
  name: "Device Ipad Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalOutlineLogo;
