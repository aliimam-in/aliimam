/**
 * Auto-generated logo component: Play Card 9 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard9FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard9FilledLogo = React.forwardRef<SVGSVGElement, PlayCard9FilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-4.01 -10h-2a2 2 0 0 0 -2 2v1l.005 .15a2 2 0 0 0 1.995 1.85h2v1h-3a1 1 0 0 0 0 2h3a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2m0 2v1h-2v-1zm-5.99 -6h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
    </svg>
  )
);

PlayCard9FilledLogo.displayName = "PlayCard9FilledLogo";

export const PlayCard9FilledLogoMetadata = {
  id: "play-card-9-filled",
  baseId: "play-card-9-filled",
  variant: "default",
  name: "Play Card 9 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard9FilledLogo;
