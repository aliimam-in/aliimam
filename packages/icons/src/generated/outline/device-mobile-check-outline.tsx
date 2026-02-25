/**
 * Auto-generated logo component: Device Mobile Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobileCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobileCheckOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobileCheckOutlineLogoProps>(
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
      <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v9.5" />
  <path d="M11 4h2" />
  <path d="M12 17v.01" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

DeviceMobileCheckOutlineLogo.displayName = "DeviceMobileCheckOutlineLogo";

export const DeviceMobileCheckOutlineLogoMetadata = {
  id: "device-mobile-check-outline",
  baseId: "device-mobile-check-outline",
  variant: "default",
  name: "Device Mobile Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobileCheckOutlineLogo;
