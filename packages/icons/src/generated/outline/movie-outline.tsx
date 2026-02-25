/**
 * Auto-generated logo component: Movie Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MovieOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MovieOutlineLogo = React.forwardRef<SVGSVGElement, MovieOutlineLogoProps>(
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
  <path d="M8 4l0 16" />
  <path d="M16 4l0 16" />
  <path d="M4 8l4 0" />
  <path d="M4 16l4 0" />
  <path d="M4 12l16 0" />
  <path d="M16 8l4 0" />
  <path d="M16 16l4 0" />
    </svg>
  )
);

MovieOutlineLogo.displayName = "MovieOutlineLogo";

export const MovieOutlineLogoMetadata = {
  id: "movie-outline",
  baseId: "movie-outline",
  variant: "default",
  name: "Movie Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MovieOutlineLogo;
