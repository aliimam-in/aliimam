/**
 * Auto-generated logo component: Play Card 2 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard2FilledLogo = React.forwardRef<SVGSVGElement, PlayCard2FilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-4.01 -10h-3a1 1 0 1 0 0 2h3v1h-2a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h3a1 1 0 0 0 0 -2h-3v-1h2a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2m-5.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
    </svg>
  )
);

PlayCard2FilledLogo.displayName = "PlayCard2FilledLogo";

export const PlayCard2FilledLogoMetadata = {
  id: "play-card-2_filled",
  baseId: "play-card-2",
  variant: "filled",
  name: "Play Card 2",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard2FilledLogo;
