/**
 * Auto-generated logo component: Film (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixFilmLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixFilmLogo = React.forwardRef<SVGSVGElement, MixFilmLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M7 3v18" />
  <path d="M3 7.5h4" />
  <path d="M3 12h18" />
  <path d="M3 16.5h4" />
  <path d="M17 3v18" />
  <path d="M17 7.5h4" />
  <path d="M17 16.5h4" />
    </svg>
  )
);

MixFilmLogo.displayName = "MixFilmLogo";

export const MixFilmLogoMetadata = {
  id: "film",
  baseId: "film",
  variant: "default",
  name: "Film",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixFilmLogo;
