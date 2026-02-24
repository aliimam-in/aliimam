/**
 * Auto-generated logo component: Wifi Low (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WifiLowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WifiLowLogo = React.forwardRef<SVGSVGElement, WifiLowLogoProps>(
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
    </svg>
  )
);

WifiLowLogo.displayName = "WifiLowLogo";

export const WifiLowLogoMetadata = {
  id: "wifi-low",
  baseId: "wifi-low",
  variant: "default",
  name: "Wifi Low",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WifiLowLogo;
