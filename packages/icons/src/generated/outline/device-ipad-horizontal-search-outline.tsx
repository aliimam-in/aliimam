/**
 * Auto-generated logo component: Device Ipad Horizontal Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalSearchOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalSearchOutlineLogoProps>(
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
      <path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
  <path d="M9 17h2" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

DeviceIpadHorizontalSearchOutlineLogo.displayName = "DeviceIpadHorizontalSearchOutlineLogo";

export const DeviceIpadHorizontalSearchOutlineLogoMetadata = {
  id: "device-ipad-horizontal-search-outline",
  baseId: "device-ipad-horizontal-search-outline",
  variant: "default",
  name: "Device Ipad Horizontal Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalSearchOutlineLogo;
