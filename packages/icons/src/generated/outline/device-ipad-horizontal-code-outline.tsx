/**
 * Auto-generated logo component: Device Ipad Horizontal Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalCodeOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalCodeOutlineLogoProps>(
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
      <path d="M11 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
  <path d="M9 17h2.5" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

DeviceIpadHorizontalCodeOutlineLogo.displayName = "DeviceIpadHorizontalCodeOutlineLogo";

export const DeviceIpadHorizontalCodeOutlineLogoMetadata = {
  id: "device-ipad-horizontal-code-outline",
  baseId: "device-ipad-horizontal-code-outline",
  variant: "default",
  name: "Device Ipad Horizontal Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalCodeOutlineLogo;
