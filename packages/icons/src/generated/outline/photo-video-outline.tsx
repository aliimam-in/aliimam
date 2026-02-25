/**
 * Auto-generated logo component: Photo Video Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoVideoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoVideoOutlineLogo = React.forwardRef<SVGSVGElement, PhotoVideoOutlineLogoProps>(
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
      <path d="M9 15h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
  <path d="M9 12a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3l0 -6" />
  <path d="M3 12l2.296 -2.296a2.41 2.41 0 0 1 3.408 0l.296 .296" />
  <path d="M14 13.5v3l2.5 -1.5l-2.5 -1.5" />
  <path d="M7 6v.01" />
    </svg>
  )
);

PhotoVideoOutlineLogo.displayName = "PhotoVideoOutlineLogo";

export const PhotoVideoOutlineLogoMetadata = {
  id: "photo-video-outline",
  baseId: "photo-video-outline",
  variant: "default",
  name: "Photo Video Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoVideoOutlineLogo;
