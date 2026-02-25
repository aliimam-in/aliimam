/**
 * Auto-generated logo component: Wallpaper (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WallpaperLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WallpaperLogo = React.forwardRef<SVGSVGElement, WallpaperLogoProps>(
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
      <path d="M12 17v4" />
  <path d="M8 21h8" />
  <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" />
  <circle cx="8" cy="9" r="2" />
  <rect x="2" y="3" width="20" height="14" rx="2" />
    </svg>
  )
);

WallpaperLogo.displayName = "WallpaperLogo";

export const WallpaperLogoMetadata = {
  id: "wallpaper",
  baseId: "wallpaper",
  variant: "default",
  name: "Wallpaper",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WallpaperLogo;
