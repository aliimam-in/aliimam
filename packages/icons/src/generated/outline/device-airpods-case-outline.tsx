/**
 * Auto-generated logo component: Device Airpods Case Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceAirpodsCaseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceAirpodsCaseOutlineLogo = React.forwardRef<SVGSVGElement, DeviceAirpodsCaseOutlineLogoProps>(
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
      <path d="M21 10h-18" />
  <path d="M3 8a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -8" />
  <path d="M7 10v1.5a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5 -1.5v-1.5" />
    </svg>
  )
);

DeviceAirpodsCaseOutlineLogo.displayName = "DeviceAirpodsCaseOutlineLogo";

export const DeviceAirpodsCaseOutlineLogoMetadata = {
  id: "device-airpods-case-outline",
  baseId: "device-airpods-case-outline",
  variant: "default",
  name: "Device Airpods Case Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceAirpodsCaseOutlineLogo;
