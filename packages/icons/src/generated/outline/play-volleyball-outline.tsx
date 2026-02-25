/**
 * Auto-generated logo component: Play Volleyball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayVolleyballOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayVolleyballOutlineLogo = React.forwardRef<SVGSVGElement, PlayVolleyballOutlineLogoProps>(
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
      <path d="M13 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M20.5 10a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
  <path d="M2 16l5 1l.5 -2.5" />
  <path d="M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2" />
    </svg>
  )
);

PlayVolleyballOutlineLogo.displayName = "PlayVolleyballOutlineLogo";

export const PlayVolleyballOutlineLogoMetadata = {
  id: "play-volleyball-outline",
  baseId: "play-volleyball-outline",
  variant: "default",
  name: "Play Volleyball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayVolleyballOutlineLogo;
