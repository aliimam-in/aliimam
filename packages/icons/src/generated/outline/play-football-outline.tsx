/**
 * Auto-generated logo component: Play Football Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayFootballOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayFootballOutlineLogo = React.forwardRef<SVGSVGElement, PlayFootballOutlineLogoProps>(
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
      <path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M3 17l5 1l.75 -1.5" />
  <path d="M14 21v-4l-4 -3l1 -6" />
  <path d="M6 12v-3l5 -1l3 3l3 1" />
  <path d="M19.5 20a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
    </svg>
  )
);

PlayFootballOutlineLogo.displayName = "PlayFootballOutlineLogo";

export const PlayFootballOutlineLogoMetadata = {
  id: "play-football-outline",
  baseId: "play-football-outline",
  variant: "default",
  name: "Play Football Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayFootballOutlineLogo;
