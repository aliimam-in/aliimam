/**
 * Auto-generated logo component: Device Tv Old Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTvOldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTvOldOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTvOldOutlineLogoProps>(
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
      <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
  <path d="M16 3l-4 4l-4 -4" />
  <path d="M15 7v13" />
  <path d="M18 15v.01" />
  <path d="M18 12v.01" />
    </svg>
  )
);

DeviceTvOldOutlineLogo.displayName = "DeviceTvOldOutlineLogo";

export const DeviceTvOldOutlineLogoMetadata = {
  id: "device-tv-old-outline",
  baseId: "device-tv-old-outline",
  variant: "default",
  name: "Device Tv Old Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTvOldOutlineLogo;
