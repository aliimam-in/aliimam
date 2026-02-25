/**
 * Auto-generated logo component: Music Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MusicMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MusicMinusOutlineLogo = React.forwardRef<SVGSVGElement, MusicMinusOutlineLogoProps>(
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
  <path d="M9 17v-13h10v11" />
  <path d="M9 8h10" />
  <path d="M16 19h6" />
    </svg>
  )
);

MusicMinusOutlineLogo.displayName = "MusicMinusOutlineLogo";

export const MusicMinusOutlineLogoMetadata = {
  id: "music-minus-outline",
  baseId: "music-minus-outline",
  variant: "default",
  name: "Music Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MusicMinusOutlineLogo;
