/**
 * Auto-generated logo component: Play Card 3 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard3FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard3FilledLogo = React.forwardRef<SVGSVGElement, PlayCard3FilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-4.51 -10h-2.5a1 1 0 1 0 0 2h2.5a.5 .5 0 0 1 .09 .992l-.09 .008h-1.5c-1.287 0 -1.332 1.864 -.133 1.993l.133 .007h1.5a.5 .5 0 1 1 0 1h-2.5a1 1 0 0 0 0 2h2.5a2.5 2.5 0 0 0 2.5 -2.5l-.005 -.164a2.5 2.5 0 0 0 -.477 -1.312l-.019 -.024l.019 -.024a2.5 2.5 0 0 0 -2.018 -3.976m-5.49 -4h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);

PlayCard3FilledLogo.displayName = "PlayCard3FilledLogo";

export const PlayCard3FilledLogoMetadata = {
  id: "play-card-3-filled",
  baseId: "play-card-3-filled",
  variant: "default",
  name: "Play Card 3 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard3FilledLogo;
