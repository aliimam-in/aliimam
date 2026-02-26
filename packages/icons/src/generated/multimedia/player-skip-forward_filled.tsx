/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayerSkipForwardFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayerSkipForwardFilled = React.forwardRef<SVGSVGElement, PlayerSkipForwardFilledProps>(
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
      <path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" />
  <path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
PlayerSkipForwardFilled.displayName = "PlayerSkipForwardFilled";
export const PlayerSkipForwardFilledMetadata = { 
  id: "player-skip-forward_filled", 
  baseId: "player-skip-forward", 
  variant: "filled", 
  name: "Player Skip Forward", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayerSkipForwardFilled;
