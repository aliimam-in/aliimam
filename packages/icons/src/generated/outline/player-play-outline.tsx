/**
 * Auto-generated logo component: Player Play Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerPlayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerPlayOutlineLogo = React.forwardRef<SVGSVGElement, PlayerPlayOutlineLogoProps>(
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
      <path d="M7 4v16l13 -8l-13 -8" />
    </svg>
  )
);

PlayerPlayOutlineLogo.displayName = "PlayerPlayOutlineLogo";

export const PlayerPlayOutlineLogoMetadata = {
  id: "player-play-outline",
  baseId: "player-play-outline",
  variant: "default",
  name: "Player Play Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerPlayOutlineLogo;
