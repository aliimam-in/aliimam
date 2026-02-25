/**
 * Auto-generated logo component: Wifi Zero (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WifiZeroLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WifiZeroLogo = React.forwardRef<SVGSVGElement, WifiZeroLogoProps>(
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
    </svg>
  )
);

WifiZeroLogo.displayName = "WifiZeroLogo";

export const WifiZeroLogoMetadata = {
  id: "wifi-zero",
  baseId: "wifi-zero",
  variant: "default",
  name: "Wifi Zero",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WifiZeroLogo;
