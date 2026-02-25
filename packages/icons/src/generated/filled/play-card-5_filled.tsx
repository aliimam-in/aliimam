/**
 * Auto-generated logo component: Play Card 5 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard5FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard5FilledLogo = React.forwardRef<SVGSVGElement, PlayCard5FilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-3.01 -10h-4a1 1 0 0 0 -1 1v3a1 1 0 0 0 1 1h3v1h-3a1 1 0 0 0 0 2h3a2 2 0 0 0 2 -2v-1l-.005 -.15a2 2 0 0 0 -1.995 -1.85h-2v-1h3a1 1 0 0 0 0 -2m-6.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
    </svg>
  )
);

PlayCard5FilledLogo.displayName = "PlayCard5FilledLogo";

export const PlayCard5FilledLogoMetadata = {
  id: "play-card-5_filled",
  baseId: "play-card-5",
  variant: "filled",
  name: "Play Card 5",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard5FilledLogo;
