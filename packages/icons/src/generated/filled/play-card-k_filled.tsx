/**
 * Auto-generated logo component: Play Card K (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCardKFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCardKFilledLogo = React.forwardRef<SVGSVGElement, PlayCardKFilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-7.01 -10a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-1.585l2.293 2.292a1 1 0 0 0 1.32 .083l.094 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293a1 1 0 1 0 -1.414 -1.414l-2.293 2.291v-1.584a1 1 0 0 0 -.883 -.993zm-2.99 -4h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);

PlayCardKFilledLogo.displayName = "PlayCardKFilledLogo";

export const PlayCardKFilledLogoMetadata = {
  id: "play-card-k_filled",
  baseId: "play-card-k",
  variant: "filled",
  name: "Play Card K",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCardKFilledLogo;
