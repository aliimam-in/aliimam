/**
 * Auto-generated logo component: Device Ipad Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceIpadMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceIpadMinusOutlineLogo = React.forwardRef<SVGSVGElement, DeviceIpadMinusOutlineLogoProps>(
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
      <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v10" />
  <path d="M9 18h3" />
  <path d="M16 19h6" />
    </svg>
  )
);

DeviceIpadMinusOutlineLogo.displayName = "DeviceIpadMinusOutlineLogo";

export const DeviceIpadMinusOutlineLogoMetadata = {
  id: "device-ipad-minus-outline",
  baseId: "device-ipad-minus-outline",
  variant: "default",
  name: "Device Ipad Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceIpadMinusOutlineLogo;
