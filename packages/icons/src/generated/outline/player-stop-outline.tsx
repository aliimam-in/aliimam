/**
 * Auto-generated logo component: Player Stop Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerStopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerStopOutlineLogo = React.forwardRef<SVGSVGElement, PlayerStopOutlineLogoProps>(
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
      <path d="M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10" />
    </svg>
  )
);

PlayerStopOutlineLogo.displayName = "PlayerStopOutlineLogo";

export const PlayerStopOutlineLogoMetadata = {
  id: "player-stop-outline",
  baseId: "player-stop-outline",
  variant: "default",
  name: "Player Stop Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerStopOutlineLogo;
