/**
 * Auto-generated logo component: Tv Minimal (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TvMinimalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TvMinimalLogo = React.forwardRef<SVGSVGElement, TvMinimalLogoProps>(
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
      <path d="M7 21h10" />
  <rect width="20" height="14" x="2" y="3" rx="2" />
    </svg>
  )
);

TvMinimalLogo.displayName = "TvMinimalLogo";

export const TvMinimalLogoMetadata = {
  id: "tv-minimal",
  baseId: "tv-minimal",
  variant: "default",
  name: "Tv Minimal",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TvMinimalLogo;
