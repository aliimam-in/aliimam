/**
 * Auto-generated logo component: House Wifi (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HouseWifiLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HouseWifiLogo = React.forwardRef<SVGSVGElement, HouseWifiLogoProps>(
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
      <path d="M9.5 13.866a4 4 0 0 1 5 .01" />
  <path d="M12 17h.01" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  <path d="M7 10.754a8 8 0 0 1 10 0" />
    </svg>
  )
);

HouseWifiLogo.displayName = "HouseWifiLogo";

export const HouseWifiLogoMetadata = {
  id: "house-wifi",
  baseId: "house-wifi",
  variant: "default",
  name: "House Wifi",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HouseWifiLogo;
