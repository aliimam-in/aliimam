/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlayCardStarFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlayCardStarFilled = React.forwardRef<SVGSVGElement, PlayCardStarFilledProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-4.98 -9.5l-.115 .005c-.384 .04 -.724 .273 -.898 .623l-.51 1.027l-1.138 .166c-.423 .059 -.78 .357 -.914 .768l-.033 .125a1.13 1.13 0 0 0 .322 1.039l.82 .797l-.194 1.127c-.07 .432 .107 .857 .454 1.108l.107 .068a1.13 1.13 0 0 0 1.078 .018l1.022 -.536l1.019 .535c.377 .2 .84 .168 1.19 -.086l.1 -.08c.281 -.259 .416 -.645 .35 -1.028l-.194 -1.126l.823 -.799c.31 -.302 .42 -.752 .287 -1.161l-.042 -.11a1.13 1.13 0 0 0 -.873 -.659l-1.138 -.166l-.508 -1.026a1.13 1.13 0 0 0 -1.014 -.63m-5.021 -4.499h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);
PlayCardStarFilled.displayName = "PlayCardStarFilled";
export const PlayCardStarFilledMetadata = { 
  id: "play-card-star_filled", 
  baseId: "play-card-star", 
  variant: "filled", 
  name: "Play Card Star", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlayCardStarFilled;
