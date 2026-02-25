/**
 * Auto-generated logo component: Device Sim 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceSim1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceSim1OutlineLogo = React.forwardRef<SVGSVGElement, DeviceSim1OutlineLogoProps>(
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
      <path d="M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1" />
  <path d="M10 11l2 -2v8" />
    </svg>
  )
);

DeviceSim1OutlineLogo.displayName = "DeviceSim1OutlineLogo";

export const DeviceSim1OutlineLogoMetadata = {
  id: "device-sim-1-outline",
  baseId: "device-sim-1-outline",
  variant: "default",
  name: "Device Sim 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceSim1OutlineLogo;
