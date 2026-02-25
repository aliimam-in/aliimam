/**
 * Auto-generated logo component: Wifi Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WifiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WifiOutlineLogo = React.forwardRef<SVGSVGElement, WifiOutlineLogoProps>(
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
  <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
  <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
    </svg>
  )
);

WifiOutlineLogo.displayName = "WifiOutlineLogo";

export const WifiOutlineLogoMetadata = {
  id: "wifi-outline",
  baseId: "wifi-outline",
  variant: "default",
  name: "Wifi Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WifiOutlineLogo;
