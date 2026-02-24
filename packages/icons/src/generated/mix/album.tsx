/**
 * Auto-generated logo component: Album (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlbumLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlbumLogo = React.forwardRef<SVGSVGElement, AlbumLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <polyline points="11 3 11 11 14 8 17 11 17 3" />
    </svg>
  )
);

AlbumLogo.displayName = "AlbumLogo";

export const AlbumLogoMetadata = {
  id: "album",
  baseId: "album",
  variant: "default",
  name: "Album",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlbumLogo;
