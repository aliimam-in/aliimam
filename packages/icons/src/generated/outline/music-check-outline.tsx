/**
 * Auto-generated logo component: Music Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MusicCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MusicCheckOutlineLogo = React.forwardRef<SVGSVGElement, MusicCheckOutlineLogoProps>(
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
  <path d="M9 17v-13h10v9.5" />
  <path d="M9 8h10" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

MusicCheckOutlineLogo.displayName = "MusicCheckOutlineLogo";

export const MusicCheckOutlineLogoMetadata = {
  id: "music-check-outline",
  baseId: "music-check-outline",
  variant: "default",
  name: "Music Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MusicCheckOutlineLogo;
