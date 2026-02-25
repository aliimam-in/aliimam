/**
 * Auto-generated logo component: Player Track Prev Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerTrackPrevOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerTrackPrevOutlineLogo = React.forwardRef<SVGSVGElement, PlayerTrackPrevOutlineLogoProps>(
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
      <path d="M21 5v14l-8 -7l8 -7" />
  <path d="M10 5v14l-8 -7l8 -7" />
    </svg>
  )
);

PlayerTrackPrevOutlineLogo.displayName = "PlayerTrackPrevOutlineLogo";

export const PlayerTrackPrevOutlineLogoMetadata = {
  id: "player-track-prev-outline",
  baseId: "player-track-prev-outline",
  variant: "default",
  name: "Player Track Prev Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerTrackPrevOutlineLogo;
