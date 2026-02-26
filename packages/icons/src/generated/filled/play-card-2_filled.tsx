/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCard2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCard2Filled = React.forwardRef<SVGSVGElement, PlayCard2FilledProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-4.01 -10h-3a1 1 0 1 0 0 2h3v1h-2a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h3a1 1 0 0 0 0 -2h-3v-1h2a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2m-5.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
    </svg>
  )
);
PlayCard2Filled.displayName = "PlayCard2Filled";
export const PlayCard2FilledMetadata = { 
  id: "play-card-2_filled", 
  baseId: "play-card-2", 
  variant: "filled", 
  name: "Play Card 2", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayCard2Filled;
