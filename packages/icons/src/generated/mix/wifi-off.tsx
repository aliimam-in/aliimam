/**
 * Auto-generated logo component: Wifi Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixWifiOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixWifiOffLogo = React.forwardRef<SVGSVGElement, MixWifiOffLogoProps>(
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
      <path d="M12 20h.01" />
  <path d="M8.5 16.429a5 5 0 0 1 7 0" />
  <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
  <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
  <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
  <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
  <path d="m2 2 20 20" />
    </svg>
  )
);

MixWifiOffLogo.displayName = "MixWifiOffLogo";

export const MixWifiOffLogoMetadata = {
  id: "wifi-off",
  baseId: "wifi-off",
  variant: "default",
  name: "Wifi Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixWifiOffLogo;
