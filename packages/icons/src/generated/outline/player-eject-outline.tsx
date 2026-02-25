/**
 * Auto-generated logo component: Player Eject Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerEjectOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerEjectOutlineLogo = React.forwardRef<SVGSVGElement, PlayerEjectOutlineLogoProps>(
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
      <path d="M5 12h14l-7 -8l-7 8" />
  <path d="M5 17a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -2" />
    </svg>
  )
);

PlayerEjectOutlineLogo.displayName = "PlayerEjectOutlineLogo";

export const PlayerEjectOutlineLogoMetadata = {
  id: "player-eject-outline",
  baseId: "player-eject-outline",
  variant: "default",
  name: "Player Eject Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerEjectOutlineLogo;
