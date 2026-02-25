/**
 * Auto-generated logo component: Music Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MusicBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MusicBoltOutlineLogo = React.forwardRef<SVGSVGElement, MusicBoltOutlineLogoProps>(
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
  <path d="M9 17v-13h10v8" />
  <path d="M9 8h10" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

MusicBoltOutlineLogo.displayName = "MusicBoltOutlineLogo";

export const MusicBoltOutlineLogoMetadata = {
  id: "music-bolt-outline",
  baseId: "music-bolt-outline",
  variant: "default",
  name: "Music Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MusicBoltOutlineLogo;
