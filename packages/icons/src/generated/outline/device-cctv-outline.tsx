/**
 * Auto-generated logo component: Device Cctv Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceCctvOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceCctvOutlineLogo = React.forwardRef<SVGSVGElement, DeviceCctvOutlineLogoProps>(
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
      <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M8 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M19 7v7a7 7 0 0 1 -14 0v-7" />
  <path d="M12 14l.01 0" />
    </svg>
  )
);

DeviceCctvOutlineLogo.displayName = "DeviceCctvOutlineLogo";

export const DeviceCctvOutlineLogoMetadata = {
  id: "device-cctv-outline",
  baseId: "device-cctv-outline",
  variant: "default",
  name: "Device Cctv Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceCctvOutlineLogo;
