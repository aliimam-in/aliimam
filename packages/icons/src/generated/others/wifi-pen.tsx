/**
 * Auto-generated logo component: Wifi Pen (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WifiPenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WifiPenLogo = React.forwardRef<SVGSVGElement, WifiPenLogoProps>(
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
      <path d="M2 8.82a15 15 0 0 1 20 0" />
  <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
  <path d="M5 12.859a10 10 0 0 1 10.5-2.222" />
  <path d="M8.5 16.429a5 5 0 0 1 3-1.406" />
    </svg>
  )
);

WifiPenLogo.displayName = "WifiPenLogo";

export const WifiPenLogoMetadata = {
  id: "wifi-pen",
  baseId: "wifi-pen",
  variant: "default",
  name: "Wifi Pen",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WifiPenLogo;
