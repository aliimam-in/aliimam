/**
 * Auto-generated logo component: Playlist Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaylistOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaylistOutlineLogo = React.forwardRef<SVGSVGElement, PlaylistOutlineLogoProps>(
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
      <path d="M11 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 17v-13h4" />
  <path d="M13 5h-10" />
  <path d="M3 9l10 0" />
  <path d="M9 13h-6" />
    </svg>
  )
);

PlaylistOutlineLogo.displayName = "PlaylistOutlineLogo";

export const PlaylistOutlineLogoMetadata = {
  id: "playlist-outline",
  baseId: "playlist-outline",
  variant: "default",
  name: "Playlist Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaylistOutlineLogo;
