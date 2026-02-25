/**
 * Auto-generated logo component: Play Handball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayHandballOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayHandballOutlineLogo = React.forwardRef<SVGSVGElement, PlayHandballOutlineLogoProps>(
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
      <path d="M13 21l3.5 -2l-4.5 -4l2 -4.5" />
  <path d="M7 6l2 4l5 .5l4 2.5l2.5 3" />
  <path d="M4 20l5 -1l1.5 -2" />
  <path d="M15 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M9.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
    </svg>
  )
);

PlayHandballOutlineLogo.displayName = "PlayHandballOutlineLogo";

export const PlayHandballOutlineLogoMetadata = {
  id: "play-handball-outline",
  baseId: "play-handball-outline",
  variant: "default",
  name: "Play Handball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayHandballOutlineLogo;
