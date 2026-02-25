/**
 * Auto-generated logo component: Device Ipad Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadBoltOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadBoltOutlineLogoProps>(
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
      <path d="M13.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" />
  <path d="M9 18h4" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

DeviceIpadBoltOutlineLogo.displayName = "DeviceIpadBoltOutlineLogo";

export const DeviceIpadBoltOutlineLogoMetadata = {
  id: "device-ipad-bolt-outline",
  baseId: "device-ipad-bolt-outline",
  variant: "default",
  name: "Device Ipad Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadBoltOutlineLogo;
