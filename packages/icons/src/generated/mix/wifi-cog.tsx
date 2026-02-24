/**
 * Auto-generated logo component: Wifi Cog (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WifiCogLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WifiCogLogo = React.forwardRef<SVGSVGElement, WifiCogLogoProps>(
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
      <path d="m14.305 19.53.923-.382" />
  <path d="m15.228 16.852-.923-.383" />
  <path d="m16.852 15.228-.383-.923" />
  <path d="m16.852 20.772-.383.924" />
  <path d="m19.148 15.228.383-.923" />
  <path d="m19.53 21.696-.382-.924" />
  <path d="M2 7.82a15 15 0 0 1 20 0" />
  <path d="m20.772 16.852.924-.383" />
  <path d="m20.772 19.148.924.383" />
  <path d="M5 11.858a10 10 0 0 1 11.5-1.785" />
  <path d="M8.5 15.429a5 5 0 0 1 2.413-1.31" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  )
);

WifiCogLogo.displayName = "WifiCogLogo";

export const WifiCogLogoMetadata = {
  id: "wifi-cog",
  baseId: "wifi-cog",
  variant: "default",
  name: "Wifi Cog",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WifiCogLogo;
