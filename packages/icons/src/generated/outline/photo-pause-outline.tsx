/**
 * Auto-generated logo component: Photo Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoPauseOutlineLogo = React.forwardRef<SVGSVGElement, PhotoPauseOutlineLogoProps>(
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
      <path d="M15 8h.01" />
  <path d="M13 21h-7a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

PhotoPauseOutlineLogo.displayName = "PhotoPauseOutlineLogo";

export const PhotoPauseOutlineLogoMetadata = {
  id: "photo-pause-outline",
  baseId: "photo-pause-outline",
  variant: "default",
  name: "Photo Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoPauseOutlineLogo;
