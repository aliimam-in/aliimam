/**
 * Auto-generated logo component: Device Tablet Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceTabletMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceTabletMinusOutlineLogo = React.forwardRef<SVGSVGElement, DeviceTabletMinusOutlineLogoProps>(
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
      <path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v11" />
  <path d="M12.872 16.51a1 1 0 1 0 -.872 1.49" />
  <path d="M16 19h6" />
    </svg>
  )
);

DeviceTabletMinusOutlineLogo.displayName = "DeviceTabletMinusOutlineLogo";

export const DeviceTabletMinusOutlineLogoMetadata = {
  id: "device-tablet-minus-outline",
  baseId: "device-tablet-minus-outline",
  variant: "default",
  name: "Device Tablet Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceTabletMinusOutlineLogo;
