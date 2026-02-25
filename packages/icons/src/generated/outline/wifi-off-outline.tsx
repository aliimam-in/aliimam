/**
 * Auto-generated logo component: Wifi Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WifiOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WifiOffOutlineLogo = React.forwardRef<SVGSVGElement, WifiOffOutlineLogoProps>(
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
      <path d="M12 18l.01 0" />
  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
  <path d="M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2" />
  <path d="M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WifiOffOutlineLogo.displayName = "WifiOffOutlineLogo";

export const WifiOffOutlineLogoMetadata = {
  id: "wifi-off-outline",
  baseId: "wifi-off-outline",
  variant: "default",
  name: "Wifi Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WifiOffOutlineLogo;
