/**
 * Auto-generated logo component: Device Ipad Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadPlusOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadPlusOutlineLogoProps>(
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
      <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" />
  <path d="M9 18h3" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

DeviceIpadPlusOutlineLogo.displayName = "DeviceIpadPlusOutlineLogo";

export const DeviceIpadPlusOutlineLogoMetadata = {
  id: "device-ipad-plus-outline",
  baseId: "device-ipad-plus-outline",
  variant: "default",
  name: "Device Ipad Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadPlusOutlineLogo;
