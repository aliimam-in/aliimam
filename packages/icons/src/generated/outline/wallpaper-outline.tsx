/**
 * Auto-generated logo component: Wallpaper Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WallpaperOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WallpaperOutlineLogo = React.forwardRef<SVGSVGElement, WallpaperOutlineLogoProps>(
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
      <path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12" />
  <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M8 18v-12a2 2 0 1 0 -4 0v12" />
    </svg>
  )
);

WallpaperOutlineLogo.displayName = "WallpaperOutlineLogo";

export const WallpaperOutlineLogoMetadata = {
  id: "wallpaper-outline",
  baseId: "wallpaper-outline",
  variant: "default",
  name: "Wallpaper Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WallpaperOutlineLogo;
