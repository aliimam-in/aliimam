/**
 * Auto-generated logo component: Devices Pc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DevicesPcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DevicesPcOutlineLogo = React.forwardRef<SVGSVGElement, DevicesPcOutlineLogoProps>(
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
      <path d="M3 5h6v14h-6l0 -14" />
  <path d="M12 9h10v7h-10l0 -7" />
  <path d="M14 19h6" />
  <path d="M17 16v3" />
  <path d="M6 13v.01" />
  <path d="M6 16v.01" />
    </svg>
  )
);

DevicesPcOutlineLogo.displayName = "DevicesPcOutlineLogo";

export const DevicesPcOutlineLogoMetadata = {
  id: "devices-pc-outline",
  baseId: "devices-pc-outline",
  variant: "default",
  name: "Devices Pc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DevicesPcOutlineLogo;
