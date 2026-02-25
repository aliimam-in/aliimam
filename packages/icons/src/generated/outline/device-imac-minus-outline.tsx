/**
 * Auto-generated logo component: Device Imac Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceImacMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceImacMinusOutlineLogo = React.forwardRef<SVGSVGElement, DeviceImacMinusOutlineLogoProps>(
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
      <path d="M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v11" />
  <path d="M3 13h18" />
  <path d="M8 21h4.5" />
  <path d="M10 17l-.5 4" />
  <path d="M16 19h6" />
    </svg>
  )
);

DeviceImacMinusOutlineLogo.displayName = "DeviceImacMinusOutlineLogo";

export const DeviceImacMinusOutlineLogoMetadata = {
  id: "device-imac-minus-outline",
  baseId: "device-imac-minus-outline",
  variant: "default",
  name: "Device Imac Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceImacMinusOutlineLogo;
