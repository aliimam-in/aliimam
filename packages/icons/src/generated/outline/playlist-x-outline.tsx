/**
 * Auto-generated logo component: Playlist X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaylistXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaylistXOutlineLogo = React.forwardRef<SVGSVGElement, PlaylistXOutlineLogoProps>(
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
      <path d="M19 8h-14" />
  <path d="M5 12h7" />
  <path d="M12 16h-7" />
  <path d="M16 14l4 4" />
  <path d="M20 14l-4 4" />
    </svg>
  )
);

PlaylistXOutlineLogo.displayName = "PlaylistXOutlineLogo";

export const PlaylistXOutlineLogoMetadata = {
  id: "playlist-x-outline",
  baseId: "playlist-x-outline",
  variant: "default",
  name: "Playlist X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaylistXOutlineLogo;
