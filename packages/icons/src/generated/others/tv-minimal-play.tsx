/**
 * Auto-generated logo component: Tv Minimal Play (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TvMinimalPlayLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TvMinimalPlayLogo = React.forwardRef<SVGSVGElement, TvMinimalPlayLogoProps>(
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
      <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
  <path d="M7 21h10" />
  <rect width="20" height="14" x="2" y="3" rx="2" />
    </svg>
  )
);

TvMinimalPlayLogo.displayName = "TvMinimalPlayLogo";

export const TvMinimalPlayLogoMetadata = {
  id: "tv-minimal-play",
  baseId: "tv-minimal-play",
  variant: "default",
  name: "Tv Minimal Play",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TvMinimalPlayLogo;
