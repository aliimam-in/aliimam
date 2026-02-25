/**
 * Auto-generated logo component: Player Track Next (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerTrackNextFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerTrackNextFilledLogo = React.forwardRef<SVGSVGElement, PlayerTrackNextFilledLogoProps>(
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
      <path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" />
  <path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" />
    </svg>
  )
);

PlayerTrackNextFilledLogo.displayName = "PlayerTrackNextFilledLogo";

export const PlayerTrackNextFilledLogoMetadata = {
  id: "player-track-next_filled",
  baseId: "player-track-next",
  variant: "filled",
  name: "Player Track Next",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerTrackNextFilledLogo;
