/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayerSkipBackFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayerSkipBackFilled = React.forwardRef<SVGSVGElement, PlayerSkipBackFilledProps>(
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
      <path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" />
  <path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
PlayerSkipBackFilled.displayName = "PlayerSkipBackFilled";
export const PlayerSkipBackFilledMetadata = { 
  id: "player-skip-back_filled", 
  baseId: "player-skip-back", 
  variant: "filled", 
  name: "Player Skip Back", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayerSkipBackFilled;
