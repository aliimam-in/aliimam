/**
 * Auto-generated logo component: Player Skip Forward Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerSkipForwardFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerSkipForwardFilledLogo = React.forwardRef<SVGSVGElement, PlayerSkipForwardFilledLogoProps>(
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
      <path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" />
  <path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" />
    </svg>
  )
);

PlayerSkipForwardFilledLogo.displayName = "PlayerSkipForwardFilledLogo";

export const PlayerSkipForwardFilledLogoMetadata = {
  id: "player-skip-forward-filled",
  baseId: "player-skip-forward-filled",
  variant: "default",
  name: "Player Skip Forward Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerSkipForwardFilledLogo;
