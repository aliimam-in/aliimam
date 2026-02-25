/**
 * Auto-generated logo component: Device Imac Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacSearchOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacSearchOutlineLogoProps>(
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
      <path d="M11 17h-7a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
  <path d="M3 13h10" />
  <path d="M8 21h4" />
  <path d="M10 17l-.5 4" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

DeviceImacSearchOutlineLogo.displayName = "DeviceImacSearchOutlineLogo";

export const DeviceImacSearchOutlineLogoMetadata = {
  id: "device-imac-search-outline",
  baseId: "device-imac-search-outline",
  variant: "default",
  name: "Device Imac Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacSearchOutlineLogo;
