/**
 * Auto-generated logo component: Wallpaper Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WallpaperOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WallpaperOffOutlineLogo = React.forwardRef<SVGSVGElement, WallpaperOffOutlineLogoProps>(
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
      <path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409a2 2 0 0 1 -1.42 .591h-12" />
  <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M8 18v-10m-3.427 -3.402c-.353 .362 -.573 .856 -.573 1.402v12" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WallpaperOffOutlineLogo.displayName = "WallpaperOffOutlineLogo";

export const WallpaperOffOutlineLogoMetadata = {
  id: "wallpaper-off-outline",
  baseId: "wallpaper-off-outline",
  variant: "default",
  name: "Wallpaper Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WallpaperOffOutlineLogo;
