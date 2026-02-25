/**
 * Auto-generated logo component: Device Projector Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceProjectorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceProjectorOutlineLogo = React.forwardRef<SVGSVGElement, DeviceProjectorOutlineLogoProps>(
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
      <path d="M8 9a5 5 0 1 0 10 0a5 5 0 0 0 -10 0" />
  <path d="M9 6h-4a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-2" />
  <path d="M6 15h1" />
  <path d="M7 18l-1 2" />
  <path d="M18 18l1 2" />
    </svg>
  )
);

DeviceProjectorOutlineLogo.displayName = "DeviceProjectorOutlineLogo";

export const DeviceProjectorOutlineLogoMetadata = {
  id: "device-projector-outline",
  baseId: "device-projector-outline",
  variant: "default",
  name: "Device Projector Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceProjectorOutlineLogo;
