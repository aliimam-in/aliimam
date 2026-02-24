/**
 * Auto-generated logo component: Gallery Thumbnails (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GalleryThumbnailsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GalleryThumbnailsLogo = React.forwardRef<SVGSVGElement, GalleryThumbnailsLogoProps>(
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
      <rect width="18" height="14" x="3" y="3" rx="2" />
  <path d="M4 21h1" />
  <path d="M9 21h1" />
  <path d="M14 21h1" />
  <path d="M19 21h1" />
    </svg>
  )
);

GalleryThumbnailsLogo.displayName = "GalleryThumbnailsLogo";

export const GalleryThumbnailsLogoMetadata = {
  id: "gallery-thumbnails",
  baseId: "gallery-thumbnails",
  variant: "default",
  name: "Gallery Thumbnails",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GalleryThumbnailsLogo;
