/**
 * Auto-generated logo component: Device Ipad Horizontal Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadHorizontalMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadHorizontalMinusOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadHorizontalMinusOutlineLogoProps>(
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
      <path d="M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9" />
  <path d="M9 17h3.5" />
  <path d="M16 19h6" />
    </svg>
  )
);

DeviceIpadHorizontalMinusOutlineLogo.displayName = "DeviceIpadHorizontalMinusOutlineLogo";

export const DeviceIpadHorizontalMinusOutlineLogoMetadata = {
  id: "device-ipad-horizontal-minus-outline",
  baseId: "device-ipad-horizontal-minus-outline",
  variant: "default",
  name: "Device Ipad Horizontal Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadHorizontalMinusOutlineLogo;
