/**
 * Auto-generated logo component: Device Tv Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTvOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTvOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTvOffOutlineLogoProps>(
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
      <path d="M11 7h8a2 2 0 0 1 2 2v8m-1.178 2.824c-.25 .113 -.529 .176 -.822 .176h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
  <path d="M16 3l-4 4l-4 -4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DeviceTvOffOutlineLogo.displayName = "DeviceTvOffOutlineLogo";

export const DeviceTvOffOutlineLogoMetadata = {
  id: "device-tv-off-outline",
  baseId: "device-tv-off-outline",
  variant: "default",
  name: "Device Tv Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTvOffOutlineLogo;
