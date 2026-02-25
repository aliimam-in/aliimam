/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCard7FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCard7Filled = React.forwardRef<SVGSVGElement, PlayCard7FilledProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-3.01 -10h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h2.612l-1.56 4.684a1 1 0 1 0 1.897 .632l2 -6a1 1 0 0 0 -.949 -1.316m-6.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
    </svg>
  )
);
PlayCard7Filled.displayName = "PlayCard7Filled";
export const PlayCard7FilledMetadata = { 
  id: "play-card-7_filled", 
  baseId: "play-card-7", 
  variant: "filled", 
  name: "Play Card 7", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayCard7Filled;
