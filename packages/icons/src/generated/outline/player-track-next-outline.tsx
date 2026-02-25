/**
 * Auto-generated logo component: Player Track Next Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerTrackNextOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerTrackNextOutlineLogo = React.forwardRef<SVGSVGElement, PlayerTrackNextOutlineLogoProps>(
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
      <path d="M3 5v14l8 -7l-8 -7" />
  <path d="M14 5v14l8 -7l-8 -7" />
    </svg>
  )
);

PlayerTrackNextOutlineLogo.displayName = "PlayerTrackNextOutlineLogo";

export const PlayerTrackNextOutlineLogoMetadata = {
  id: "player-track-next-outline",
  baseId: "player-track-next-outline",
  variant: "default",
  name: "Player Track Next Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerTrackNextOutlineLogo;
