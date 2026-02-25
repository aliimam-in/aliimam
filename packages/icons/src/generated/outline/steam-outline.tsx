/**
 * Auto-generated logo component: Steam Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SteamOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SteamOutlineLogo = React.forwardRef<SVGSVGElement, SteamOutlineLogoProps>(
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
      <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M19 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M5.5 5.5l3 3" />
  <path d="M15.5 15.5l3 3" />
  <path d="M18.5 5.5l-3 3" />
  <path d="M8.5 15.5l-3 3" />
    </svg>
  )
);

SteamOutlineLogo.displayName = "SteamOutlineLogo";

export const SteamOutlineLogoMetadata = {
  id: "steam-outline",
  baseId: "steam-outline",
  variant: "default",
  name: "Steam Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SteamOutlineLogo;
