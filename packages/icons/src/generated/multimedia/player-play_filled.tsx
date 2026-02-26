/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayerPlayFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayerPlayFilled = React.forwardRef<SVGSVGElement, PlayerPlayFilledProps>(
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
      <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
    </svg>
  )
);
PlayerPlayFilled.displayName = "PlayerPlayFilled";
export const PlayerPlayFilledMetadata = { 
  id: "player-play_filled", 
  baseId: "player-play", 
  variant: "filled", 
  name: "Player Play", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayerPlayFilled;
