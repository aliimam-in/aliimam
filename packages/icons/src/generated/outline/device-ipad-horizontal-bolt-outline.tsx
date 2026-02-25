/**
 * Auto-generated logo component: Device Ipad Horizontal Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalBoltOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalBoltOutlineLogoProps>(
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
      <path d="M13 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6.5" />
  <path d="M9 17h4.5" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

DeviceIpadHorizontalBoltOutlineLogo.displayName = "DeviceIpadHorizontalBoltOutlineLogo";

export const DeviceIpadHorizontalBoltOutlineLogoMetadata = {
  id: "device-ipad-horizontal-bolt-outline",
  baseId: "device-ipad-horizontal-bolt-outline",
  variant: "default",
  name: "Device Ipad Horizontal Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalBoltOutlineLogo;
