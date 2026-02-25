/**
 * Auto-generated logo component: Device Ipad Horizontal Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalCogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalCogOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalCogOutlineLogoProps>(
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
      <path d="M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
  <path d="M9 17h3" />
  <path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
    </svg>
  )
);

DeviceIpadHorizontalCogOutlineLogo.displayName = "DeviceIpadHorizontalCogOutlineLogo";

export const DeviceIpadHorizontalCogOutlineLogoMetadata = {
  id: "device-ipad-horizontal-cog-outline",
  baseId: "device-ipad-horizontal-cog-outline",
  variant: "default",
  name: "Device Ipad Horizontal Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalCogOutlineLogo;
