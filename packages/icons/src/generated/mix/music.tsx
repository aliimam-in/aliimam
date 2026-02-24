/**
 * Auto-generated logo component: Music (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMusicLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMusicLogo = React.forwardRef<SVGSVGElement, MixMusicLogoProps>(
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
      <path d="M9 18V5l12-2v13" />
  <circle cx="6" cy="18" r="3" />
  <circle cx="18" cy="16" r="3" />
    </svg>
  )
);

MixMusicLogo.displayName = "MixMusicLogo";

export const MixMusicLogoMetadata = {
  id: "music",
  baseId: "music",
  variant: "default",
  name: "Music",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMusicLogo;
