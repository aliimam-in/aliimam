/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCard4FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCard4Filled = React.forwardRef<SVGSVGElement, PlayCard4FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-3.01 -10a1 1 0 0 0 -1 1v2h-2v-2a1 1 0 0 0 -2 0v2a2 2 0 0 0 2 2h2v2a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1m-6.99 -4h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);
PlayCard4Filled.displayName = "PlayCard4Filled";
export const PlayCard4FilledMetadata = { id: "play-card-4_filled", baseId: "play-card-4", variant: "filled", name: "Play Card 4", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default PlayCard4Filled;
