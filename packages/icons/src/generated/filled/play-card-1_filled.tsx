/**
 * Auto-generated logo component: Play Card 1 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard1FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard1FilledLogo = React.forwardRef<SVGSVGElement, PlayCard1FilledLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-5.01 -10a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1m-4.99 -4h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);

PlayCard1FilledLogo.displayName = "PlayCard1FilledLogo";

export const PlayCard1FilledLogoMetadata = {
  id: "play-card-1_filled",
  baseId: "play-card-1",
  variant: "filled",
  name: "Play Card 1",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard1FilledLogo;
