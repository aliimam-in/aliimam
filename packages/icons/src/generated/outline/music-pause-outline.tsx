/**
 * Auto-generated logo component: Music Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MusicPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MusicPauseOutlineLogo = React.forwardRef<SVGSVGElement, MusicPauseOutlineLogoProps>(
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
      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M9 17v-13h10v9" />
  <path d="M9 8h10" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

MusicPauseOutlineLogo.displayName = "MusicPauseOutlineLogo";

export const MusicPauseOutlineLogoMetadata = {
  id: "music-pause-outline",
  baseId: "music-pause-outline",
  variant: "default",
  name: "Music Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MusicPauseOutlineLogo;
