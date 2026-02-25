/**
 * Auto-generated logo component: Wifi High (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WifiHighLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WifiHighLogo = React.forwardRef<SVGSVGElement, WifiHighLogoProps>(
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
  <path d="M5 12.859a10 10 0 0 1 14 0" />
  <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  )
);

WifiHighLogo.displayName = "WifiHighLogo";

export const WifiHighLogoMetadata = {
  id: "wifi-high",
  baseId: "wifi-high",
  variant: "default",
  name: "Wifi High",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WifiHighLogo;
