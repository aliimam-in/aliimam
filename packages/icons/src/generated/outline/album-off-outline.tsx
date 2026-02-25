/**
 * Auto-generated logo component: Album Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlbumOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlbumOffOutlineLogo = React.forwardRef<SVGSVGElement, AlbumOffOutlineLogoProps>(
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.581 3.41c-.362 .364 -.864 .59 -1.419 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.052 .585 -1.413" />
  <path d="M12 4v4m1.503 1.497l.497 -.497l2 2v-7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AlbumOffOutlineLogo.displayName = "AlbumOffOutlineLogo";

export const AlbumOffOutlineLogoMetadata = {
  id: "album-off-outline",
  baseId: "album-off-outline",
  variant: "default",
  name: "Album Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlbumOffOutlineLogo;
