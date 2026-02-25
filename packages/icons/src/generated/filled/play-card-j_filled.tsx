/**
 * Auto-generated logo component: Play Card J (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCardJFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCardJFilledLogo = React.forwardRef<SVGSVGElement, PlayCardJFilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-3.01 -10h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h3v3a1 1 0 0 1 -2 0a1 1 0 0 0 -2 0a3 3 0 0 0 6 0v-4a1 1 0 0 0 -1 -1m-6.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
    </svg>
  )
);

PlayCardJFilledLogo.displayName = "PlayCardJFilledLogo";

export const PlayCardJFilledLogoMetadata = {
  id: "play-card-j_filled",
  baseId: "play-card-j",
  variant: "filled",
  name: "Play Card J",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCardJFilledLogo;
