/**
 * Auto-generated logo component: Playlist Add Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaylistAddOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaylistAddOutlineLogo = React.forwardRef<SVGSVGElement, PlaylistAddOutlineLogoProps>(
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
  <path d="M5 12h9" />
  <path d="M11 16h-6" />
  <path d="M15 16h6" />
  <path d="M18 13v6" />
    </svg>
  )
);

PlaylistAddOutlineLogo.displayName = "PlaylistAddOutlineLogo";

export const PlaylistAddOutlineLogoMetadata = {
  id: "playlist-add-outline",
  baseId: "playlist-add-outline",
  variant: "default",
  name: "Playlist Add Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaylistAddOutlineLogo;
