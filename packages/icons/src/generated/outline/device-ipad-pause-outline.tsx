/**
 * Auto-generated logo component: Device Ipad Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadPauseOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadPauseOutlineLogoProps>(
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
      <path d="M13 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
  <path d="M9 18h4" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

DeviceIpadPauseOutlineLogo.displayName = "DeviceIpadPauseOutlineLogo";

export const DeviceIpadPauseOutlineLogoMetadata = {
  id: "device-ipad-pause-outline",
  baseId: "device-ipad-pause-outline",
  variant: "default",
  name: "Device Ipad Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadPauseOutlineLogo;
