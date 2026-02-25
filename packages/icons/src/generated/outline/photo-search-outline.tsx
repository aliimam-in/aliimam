/**
 * Auto-generated logo component: Photo Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoSearchOutlineLogo = React.forwardRef<SVGSVGElement, PhotoSearchOutlineLogoProps>(
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
  <path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2" />
    </svg>
  )
);

PhotoSearchOutlineLogo.displayName = "PhotoSearchOutlineLogo";

export const PhotoSearchOutlineLogoMetadata = {
  id: "photo-search-outline",
  baseId: "photo-search-outline",
  variant: "default",
  name: "Photo Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoSearchOutlineLogo;
