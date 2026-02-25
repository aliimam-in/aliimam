/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCard5FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCard5Filled = React.forwardRef<SVGSVGElement, PlayCard5FilledProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-3.01 -10h-4a1 1 0 0 0 -1 1v3a1 1 0 0 0 1 1h3v1h-3a1 1 0 0 0 0 2h3a2 2 0 0 0 2 -2v-1l-.005 -.15a2 2 0 0 0 -1.995 -1.85h-2v-1h3a1 1 0 0 0 0 -2m-6.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
    </svg>
  )
);
PlayCard5Filled.displayName = "PlayCard5Filled";
export const PlayCard5FilledMetadata = { 
  id: "play-card-5_filled", 
  baseId: "play-card-5", 
  variant: "filled", 
  name: "Play Card 5", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayCard5Filled;
