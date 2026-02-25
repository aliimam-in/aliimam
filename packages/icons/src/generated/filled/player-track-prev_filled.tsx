/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayerTrackPrevFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayerTrackPrevFilled = React.forwardRef<SVGSVGElement, PlayerTrackPrevFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" />
  <path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" />
    </svg>
  )
);
PlayerTrackPrevFilled.displayName = "PlayerTrackPrevFilled";
export const PlayerTrackPrevFilledMetadata = { id: "player-track-prev_filled", baseId: "player-track-prev", variant: "filled", name: "Player Track Prev", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default PlayerTrackPrevFilled;
