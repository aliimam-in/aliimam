/**
 * Auto-generated logo component: Film (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilmLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilmLogo = React.forwardRef<SVGSVGElement, FilmLogoProps>(
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
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>
    </svg>
  )
);

FilmLogo.displayName = "FilmLogo";

export const FilmLogoMetadata = {
  id: "film",
  baseId: "film",
  variant: "default",
  name: "Film",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilmLogo;
