/**
 * Auto-generated logo component: Movie Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MovieOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MovieOffOutlineLogo = React.forwardRef<SVGSVGElement, MovieOffOutlineLogoProps>(
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362 .359 -.859 .58 -1.408 .58h-12a2 2 0 0 1 -2 -2v-12c0 -.539 .213 -1.028 .56 -1.388" />
  <path d="M8 8v12" />
  <path d="M16 4v8m0 4v4" />
  <path d="M4 8h4" />
  <path d="M4 16h4" />
  <path d="M4 12h8m4 0h4" />
  <path d="M16 8h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MovieOffOutlineLogo.displayName = "MovieOffOutlineLogo";

export const MovieOffOutlineLogoMetadata = {
  id: "movie-off-outline",
  baseId: "movie-off-outline",
  variant: "default",
  name: "Movie Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MovieOffOutlineLogo;
