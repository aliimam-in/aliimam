/**
 * Auto-generated logo component: Device Ipad Horizontal Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalCancelOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalCancelOutlineLogoProps>(
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
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
    </svg>
  )
);

DeviceIpadHorizontalCancelOutlineLogo.displayName = "DeviceIpadHorizontalCancelOutlineLogo";

export const DeviceIpadHorizontalCancelOutlineLogoMetadata = {
  id: "device-ipad-horizontal-cancel-outline",
  baseId: "device-ipad-horizontal-cancel-outline",
  variant: "default",
  name: "Device Ipad Horizontal Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalCancelOutlineLogo;
