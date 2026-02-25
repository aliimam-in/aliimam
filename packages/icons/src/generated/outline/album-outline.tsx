/**
 * Auto-generated logo component: Album Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlbumOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlbumOutlineLogo = React.forwardRef<SVGSVGElement, AlbumOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M12 4v7l2 -2l2 2v-7" />
    </svg>
  )
);

AlbumOutlineLogo.displayName = "AlbumOutlineLogo";

export const AlbumOutlineLogoMetadata = {
  id: "album-outline",
  baseId: "album-outline",
  variant: "default",
  name: "Album Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlbumOutlineLogo;
