/**
 * Auto-generated logo component: Player Skip Forward Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerSkipForwardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerSkipForwardOutlineLogo = React.forwardRef<SVGSVGElement, PlayerSkipForwardOutlineLogoProps>(
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
      <path d="M4 5v14l12 -7l-12 -7" />
  <path d="M20 5l0 14" />
    </svg>
  )
);

PlayerSkipForwardOutlineLogo.displayName = "PlayerSkipForwardOutlineLogo";

export const PlayerSkipForwardOutlineLogoMetadata = {
  id: "player-skip-forward-outline",
  baseId: "player-skip-forward-outline",
  variant: "default",
  name: "Player Skip Forward Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerSkipForwardOutlineLogo;
