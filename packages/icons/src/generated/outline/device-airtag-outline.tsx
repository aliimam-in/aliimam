/**
 * Auto-generated logo component: Device Airtag Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceAirtagOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceAirtagOutlineLogo = React.forwardRef<SVGSVGElement, DeviceAirtagOutlineLogoProps>(
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
      <path d="M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0" />
  <path d="M9 15v.01" />
  <path d="M15 15a6 6 0 0 0 -6 -6" />
  <path d="M12 15a3 3 0 0 0 -3 -3" />
    </svg>
  )
);

DeviceAirtagOutlineLogo.displayName = "DeviceAirtagOutlineLogo";

export const DeviceAirtagOutlineLogoMetadata = {
  id: "device-airtag-outline",
  baseId: "device-airtag-outline",
  variant: "default",
  name: "Device Airtag Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceAirtagOutlineLogo;
