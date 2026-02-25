/**
 * Auto-generated logo component: Photo Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoBoltOutlineLogo = React.forwardRef<SVGSVGElement, PhotoBoltOutlineLogoProps>(
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
  <path d="M13.5 21h-7.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
  <path d="M14 14l1 -1c.669 -.643 1.45 -.823 2.18 -.54" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

PhotoBoltOutlineLogo.displayName = "PhotoBoltOutlineLogo";

export const PhotoBoltOutlineLogoMetadata = {
  id: "photo-bolt-outline",
  baseId: "photo-bolt-outline",
  variant: "default",
  name: "Photo Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoBoltOutlineLogo;
