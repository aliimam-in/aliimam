/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCard6FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCard6Filled = React.forwardRef<SVGSVGElement, PlayCard6FilledProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-3.01 -10h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1l-.005 -.15a2 2 0 0 0 -1.995 -1.85h-2v-1h3a1 1 0 0 0 0 -2m-1 5v1h-2v-1zm-5.99 -9h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);
PlayCard6Filled.displayName = "PlayCard6Filled";
export const PlayCard6FilledMetadata = { 
  id: "play-card-6_filled", 
  baseId: "play-card-6", 
  variant: "filled", 
  name: "Play Card 6", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayCard6Filled;
