/**
 * Auto-generated logo component: Disc Album (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiscAlbumLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiscAlbumLogo = React.forwardRef<SVGSVGElement, DiscAlbumLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <circle cx="12" cy="12" r="5" />
  <path d="M12 12h.01" />
    </svg>
  )
);

DiscAlbumLogo.displayName = "DiscAlbumLogo";

export const DiscAlbumLogoMetadata = {
  id: "disc-album",
  baseId: "disc-album",
  variant: "default",
  name: "Disc Album",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiscAlbumLogo;
