/**
 * Auto-generated logo component: Device Ipad Horizontal Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalDownOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalDownOutlineLogoProps>(
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
      <path d="M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6.5" />
  <path d="M9 17h3.5" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
    </svg>
  )
);

DeviceIpadHorizontalDownOutlineLogo.displayName = "DeviceIpadHorizontalDownOutlineLogo";

export const DeviceIpadHorizontalDownOutlineLogoMetadata = {
  id: "device-ipad-horizontal-down-outline",
  baseId: "device-ipad-horizontal-down-outline",
  variant: "default",
  name: "Device Ipad Horizontal Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalDownOutlineLogo;
