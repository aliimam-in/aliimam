/**
 * Auto-generated logo component: Photo Circle Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoCircleMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoCircleMinusOutlineLogo = React.forwardRef<SVGSVGElement, PhotoCircleMinusOutlineLogoProps>(
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
  <path d="M20.475 15.035a9 9 0 0 0 -8.475 -12.035a9 9 0 0 0 -9 9a9 9 0 0 0 9.525 8.985" />
  <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" />
  <path d="M16 19h6" />
    </svg>
  )
);

PhotoCircleMinusOutlineLogo.displayName = "PhotoCircleMinusOutlineLogo";

export const PhotoCircleMinusOutlineLogoMetadata = {
  id: "photo-circle-minus-outline",
  baseId: "photo-circle-minus-outline",
  variant: "default",
  name: "Photo Circle Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoCircleMinusOutlineLogo;
