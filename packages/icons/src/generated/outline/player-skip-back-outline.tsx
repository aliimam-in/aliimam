/**
 * Auto-generated logo component: Player Skip Back Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerSkipBackOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerSkipBackOutlineLogo = React.forwardRef<SVGSVGElement, PlayerSkipBackOutlineLogoProps>(
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
      <path d="M20 5v14l-12 -7l12 -7" />
  <path d="M4 5l0 14" />
    </svg>
  )
);

PlayerSkipBackOutlineLogo.displayName = "PlayerSkipBackOutlineLogo";

export const PlayerSkipBackOutlineLogoMetadata = {
  id: "player-skip-back-outline",
  baseId: "player-skip-back-outline",
  variant: "default",
  name: "Player Skip Back Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerSkipBackOutlineLogo;
