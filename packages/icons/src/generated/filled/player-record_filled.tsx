/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayerRecordFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayerRecordFilled = React.forwardRef<SVGSVGElement, PlayerRecordFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z" />
    </svg>
  )
);
PlayerRecordFilled.displayName = "PlayerRecordFilled";
export const PlayerRecordFilledMetadata = { id: "player-record_filled", baseId: "player-record", variant: "filled", name: "Player Record", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default PlayerRecordFilled;
