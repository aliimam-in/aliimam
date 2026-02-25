/**
 * Auto-generated logo component: Device Ipad Horizontal Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalOffOutlineLogoProps>(
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
      <path d="M8 4h12a2 2 0 0 1 2 2v12m-2 2h-16a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
  <path d="M9 17h6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DeviceIpadHorizontalOffOutlineLogo.displayName = "DeviceIpadHorizontalOffOutlineLogo";

export const DeviceIpadHorizontalOffOutlineLogoMetadata = {
  id: "device-ipad-horizontal-off-outline",
  baseId: "device-ipad-horizontal-off-outline",
  variant: "default",
  name: "Device Ipad Horizontal Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalOffOutlineLogo;
