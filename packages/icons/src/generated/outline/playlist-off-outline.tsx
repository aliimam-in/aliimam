/**
 * Auto-generated logo component: Playlist Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaylistOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaylistOffOutlineLogo = React.forwardRef<SVGSVGElement, PlaylistOffOutlineLogoProps>(
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
      <path d="M14 14a3 3 0 1 0 3 3" />
  <path d="M17 13v-9h4" />
  <path d="M13 5h-4m-4 0h-2" />
  <path d="M3 9h6" />
  <path d="M9 13h-6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PlaylistOffOutlineLogo.displayName = "PlaylistOffOutlineLogo";

export const PlaylistOffOutlineLogoMetadata = {
  id: "playlist-off-outline",
  baseId: "playlist-off-outline",
  variant: "default",
  name: "Playlist Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaylistOffOutlineLogo;
