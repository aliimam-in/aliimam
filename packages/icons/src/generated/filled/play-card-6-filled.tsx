/**
 * Auto-generated logo component: Play Card 6 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard6FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard6FilledLogo = React.forwardRef<SVGSVGElement, PlayCard6FilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-3.01 -10h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1l-.005 -.15a2 2 0 0 0 -1.995 -1.85h-2v-1h3a1 1 0 0 0 0 -2m-1 5v1h-2v-1zm-5.99 -9h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);

PlayCard6FilledLogo.displayName = "PlayCard6FilledLogo";

export const PlayCard6FilledLogoMetadata = {
  id: "play-card-6-filled",
  baseId: "play-card-6-filled",
  variant: "default",
  name: "Play Card 6 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard6FilledLogo;
