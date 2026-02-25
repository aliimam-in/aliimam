/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BallBowlingFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BallBowlingFilled = React.forwardRef<SVGSVGElement, BallBowlingFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 3.34a10 10 0 1 1 -10 17.32a10 10 0 0 1 10 -17.32m-3 7.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m-3 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m4 -1a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
BallBowlingFilled.displayName = "BallBowlingFilled";
export const BallBowlingFilledMetadata = { id: "ball-bowling_filled", baseId: "ball-bowling", variant: "filled", name: "Ball Bowling", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default BallBowlingFilled;
