/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCard8FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCard8Filled = React.forwardRef<SVGSVGElement, PlayCard8FilledProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-4.01 -10h-2a2 2 0 0 0 -2 2v1c0 .365 .098 .707 .268 1.001c-.17 .293 -.268 .635 -.268 .999v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -.268 -1c.17 -.293 .268 -.635 .268 -1v-1a2 2 0 0 0 -2 -2m0 5v1h-2v-1zm0 -3v1h-2v-1zm-5.99 -6h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);
PlayCard8Filled.displayName = "PlayCard8Filled";
export const PlayCard8FilledMetadata = { 
  id: "play-card-8_filled", 
  baseId: "play-card-8", 
  variant: "filled", 
  name: "Play Card 8", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayCard8Filled;
