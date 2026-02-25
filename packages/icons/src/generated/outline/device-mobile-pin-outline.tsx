/**
 * Auto-generated logo component: Device Mobile Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviceMobilePinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeviceMobilePinOutlineLogo = React.forwardRef<SVGSVGElement, DeviceMobilePinOutlineLogoProps>(
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
      <path d="M12.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6" />
  <path d="M11 4h2" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
  <path d="M12 17v.01" />
    </svg>
  )
);

DeviceMobilePinOutlineLogo.displayName = "DeviceMobilePinOutlineLogo";

export const DeviceMobilePinOutlineLogoMetadata = {
  id: "device-mobile-pin-outline",
  baseId: "device-mobile-pin-outline",
  variant: "default",
  name: "Device Mobile Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeviceMobilePinOutlineLogo;
