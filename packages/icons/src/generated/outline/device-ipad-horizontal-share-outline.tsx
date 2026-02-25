/**
 * Auto-generated logo component: Device Ipad Horizontal Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalShareOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalShareOutlineLogoProps>(
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
      <path d="M12.5 20h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
  <path d="M9 17h3" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

DeviceIpadHorizontalShareOutlineLogo.displayName = "DeviceIpadHorizontalShareOutlineLogo";

export const DeviceIpadHorizontalShareOutlineLogoMetadata = {
  id: "device-ipad-horizontal-share-outline",
  baseId: "device-ipad-horizontal-share-outline",
  variant: "default",
  name: "Device Ipad Horizontal Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalShareOutlineLogo;
