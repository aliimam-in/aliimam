/**
 * Auto-generated logo component: Music Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MusicOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MusicOffOutlineLogo = React.forwardRef<SVGSVGElement, MusicOffOutlineLogoProps>(
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
      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14.42 14.45a3 3 0 1 0 4.138 4.119" />
  <path d="M9 17v-8m0 -4v-1h10v11" />
  <path d="M12 8h7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MusicOffOutlineLogo.displayName = "MusicOffOutlineLogo";

export const MusicOffOutlineLogoMetadata = {
  id: "music-off-outline",
  baseId: "music-off-outline",
  variant: "default",
  name: "Music Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MusicOffOutlineLogo;
