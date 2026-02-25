/**
 * Auto-generated logo component: Player Play Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerPlayFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerPlayFilledLogo = React.forwardRef<SVGSVGElement, PlayerPlayFilledLogoProps>(
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
      <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
    </svg>
  )
);

PlayerPlayFilledLogo.displayName = "PlayerPlayFilledLogo";

export const PlayerPlayFilledLogoMetadata = {
  id: "player-play-filled",
  baseId: "player-play-filled",
  variant: "default",
  name: "Player Play Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerPlayFilledLogo;
