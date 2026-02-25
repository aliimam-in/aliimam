/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCardAFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCardAFilled = React.forwardRef<SVGSVGElement, PlayCardAFilledProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-5.01 -10a3 3 0 0 0 -3 3v4a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-4a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 .883 -.993zm-4.99 -6h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);
PlayCardAFilled.displayName = "PlayCardAFilled";
export const PlayCardAFilledMetadata = { 
  id: "play-card-a_filled", 
  baseId: "play-card-a", 
  variant: "filled", 
  name: "Play Card A", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayCardAFilled;
