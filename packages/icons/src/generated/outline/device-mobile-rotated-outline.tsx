/**
 * Auto-generated logo component: Device Mobile Rotated Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileRotatedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileRotatedOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileRotatedOutlineLogoProps>(
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
      <path d="M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M20 11v2" />
  <path d="M7 12h-.01" />
    </svg>
  )
);

DeviceMobileRotatedOutlineLogo.displayName = "DeviceMobileRotatedOutlineLogo";

export const DeviceMobileRotatedOutlineLogoMetadata = {
  id: "device-mobile-rotated-outline",
  baseId: "device-mobile-rotated-outline",
  variant: "default",
  name: "Device Mobile Rotated Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileRotatedOutlineLogo;
