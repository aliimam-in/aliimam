/**
 * Auto-generated logo component: Photo Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoCogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoCogOutlineLogo = React.forwardRef<SVGSVGElement, PhotoCogOutlineLogoProps>(
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
  <path d="M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" />
  <path d="M14 14l1 -1c.48 -.461 1.016 -.684 1.551 -.67" />
  <path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
    </svg>
  )
);

PhotoCogOutlineLogo.displayName = "PhotoCogOutlineLogo";

export const PhotoCogOutlineLogoMetadata = {
  id: "photo-cog-outline",
  baseId: "photo-cog-outline",
  variant: "default",
  name: "Photo Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoCogOutlineLogo;
