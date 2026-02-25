/**
 * Auto-generated logo component: Device Ipad Horizontal Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalPauseOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalPauseOutlineLogoProps>(
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
      <path d="M13 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
  <path d="M9 17h4" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

DeviceIpadHorizontalPauseOutlineLogo.displayName = "DeviceIpadHorizontalPauseOutlineLogo";

export const DeviceIpadHorizontalPauseOutlineLogoMetadata = {
  id: "device-ipad-horizontal-pause-outline",
  baseId: "device-ipad-horizontal-pause-outline",
  variant: "default",
  name: "Device Ipad Horizontal Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalPauseOutlineLogo;
