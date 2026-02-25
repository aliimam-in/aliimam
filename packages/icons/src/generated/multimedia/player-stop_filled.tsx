/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayerStopFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayerStopFilled = React.forwardRef<SVGSVGElement, PlayerStopFilledProps>(
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
      <path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
    </svg>
  )
);
PlayerStopFilled.displayName = "PlayerStopFilled";
export const PlayerStopFilledMetadata = { 
  id: "player-stop_filled", 
  baseId: "player-stop", 
  variant: "filled", 
  name: "Player Stop", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayerStopFilled;
