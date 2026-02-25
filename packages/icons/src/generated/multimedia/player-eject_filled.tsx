/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayerEjectFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayerEjectFilled = React.forwardRef<SVGSVGElement, PlayerEjectFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M11.247 3.341l-7 8c-.565 .647 -.106 1.659 .753 1.659h14c.86 0 1.318 -1.012 .753 -1.659l-7 -8a1 1 0 0 0 -1.506 0z" />
  <path d="M18 15h-12a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
    </svg>
  )
);
PlayerEjectFilled.displayName = "PlayerEjectFilled";
export const PlayerEjectFilledMetadata = { 
  id: "player-eject_filled", 
  baseId: "player-eject", 
  variant: "filled", 
  name: "Player Eject", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayerEjectFilled;
