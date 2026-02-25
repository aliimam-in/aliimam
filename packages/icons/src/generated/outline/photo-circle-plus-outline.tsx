/**
 * Auto-generated logo component: Photo Circle Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoCirclePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoCirclePlusOutlineLogo = React.forwardRef<SVGSVGElement, PhotoCirclePlusOutlineLogoProps>(
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
  <path d="M20.964 12.806a9 9 0 0 0 -8.964 -9.806a9 9 0 0 0 -9 9a9 9 0 0 0 9.397 8.991" />
  <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
  <path d="M16 19.33h6" />
  <path d="M19 16.33v6" />
    </svg>
  )
);

PhotoCirclePlusOutlineLogo.displayName = "PhotoCirclePlusOutlineLogo";

export const PhotoCirclePlusOutlineLogoMetadata = {
  id: "photo-circle-plus-outline",
  baseId: "photo-circle-plus-outline",
  variant: "default",
  name: "Photo Circle Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoCirclePlusOutlineLogo;
