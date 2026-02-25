/**
 * Auto-generated logo component: Device Mobile Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileOffOutlineLogoProps>(
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
      <path d="M7.159 3.185c.256 -.119 .54 -.185 .841 -.185h8a2 2 0 0 1 2 2v9m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-13" />
  <path d="M11 4h2" />
  <path d="M3 3l18 18" />
  <path d="M12 17v.01" />
    </svg>
  )
);

DeviceMobileOffOutlineLogo.displayName = "DeviceMobileOffOutlineLogo";

export const DeviceMobileOffOutlineLogoMetadata = {
  id: "device-mobile-off-outline",
  baseId: "device-mobile-off-outline",
  variant: "default",
  name: "Device Mobile Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileOffOutlineLogo;
