/**
 * Auto-generated logo component: Device Mobile Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileMinusOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileMinusOutlineLogoProps>(
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
      <path d="M12.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v10" />
  <path d="M11 4h2" />
  <path d="M12 17v.01" />
  <path d="M16 19h6" />
    </svg>
  )
);

DeviceMobileMinusOutlineLogo.displayName = "DeviceMobileMinusOutlineLogo";

export const DeviceMobileMinusOutlineLogoMetadata = {
  id: "device-mobile-minus-outline",
  baseId: "device-mobile-minus-outline",
  variant: "default",
  name: "Device Mobile Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileMinusOutlineLogo;
