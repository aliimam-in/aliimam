/**
 * Auto-generated logo component: Wifi (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WifiLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WifiLogo = React.forwardRef<SVGSVGElement, WifiLogoProps>(
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
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  )
);

WifiLogo.displayName = "WifiLogo";

export const WifiLogoMetadata = {
  id: "wifi",
  baseId: "wifi",
  variant: "default",
  name: "Wifi",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WifiLogo;
