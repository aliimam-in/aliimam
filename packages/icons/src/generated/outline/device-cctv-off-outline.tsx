/**
 * Auto-generated logo component: Device Cctv Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceCctvOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceCctvOffOutlineLogo = React.forwardRef<SVGSVGElement, DeviceCctvOffOutlineLogoProps>(
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
      <path d="M7 7h-3a1 1 0 0 1 -1 -1v-2c0 -.275 .11 -.523 .29 -.704m3.71 -.296h13a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-9" />
  <path d="M10.36 10.35a4 4 0 1 0 5.285 5.3" />
  <path d="M19 7v7c0 .321 -.022 .637 -.064 .947m-1.095 2.913a7 7 0 0 1 -12.841 -3.86l0 -7" />
  <path d="M12 14h.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DeviceCctvOffOutlineLogo.displayName = "DeviceCctvOffOutlineLogo";

export const DeviceCctvOffOutlineLogoMetadata = {
  id: "device-cctv-off-outline",
  baseId: "device-cctv-off-outline",
  variant: "default",
  name: "Device Cctv Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceCctvOffOutlineLogo;
