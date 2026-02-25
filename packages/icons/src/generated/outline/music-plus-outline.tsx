/**
 * Auto-generated logo component: Music Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MusicPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MusicPlusOutlineLogo = React.forwardRef<SVGSVGElement, MusicPlusOutlineLogoProps>(
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
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

MusicPlusOutlineLogo.displayName = "MusicPlusOutlineLogo";

export const MusicPlusOutlineLogoMetadata = {
  id: "music-plus-outline",
  baseId: "music-plus-outline",
  variant: "default",
  name: "Music Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MusicPlusOutlineLogo;
