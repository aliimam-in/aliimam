/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCardQFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCardQFilled = React.forwardRef<SVGSVGElement, PlayCardQFilledProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-5.01 -10a3 3 0 0 0 -3 3v2a3 3 0 0 0 4.293 2.708l.5 .5a1 1 0 0 0 1.414 -1.415l-.499 -.5c.187 -.392 .292 -.83 .292 -1.293v-2a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -2 0v-2a1 1 0 0 1 1 -1m-4.99 -6h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);
PlayCardQFilled.displayName = "PlayCardQFilled";
export const PlayCardQFilledMetadata = { 
  id: "play-card-q_filled", 
  baseId: "play-card-q", 
  variant: "filled", 
  name: "Play Card Q", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayCardQFilled;
