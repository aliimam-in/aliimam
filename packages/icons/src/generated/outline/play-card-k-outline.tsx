/**
 * Auto-generated logo component: Play Card K Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCardKOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCardKOutlineLogo = React.forwardRef<SVGSVGElement, PlayCardKOutlineLogoProps>(
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
      <path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" />
  <path d="M8 6h.01" />
  <path d="M16 18h.01" />
  <path d="M10 9v6" />
  <path d="M14 9l-3 3l3 3" />
  <path d="M10 12h1" />
    </svg>
  )
);

PlayCardKOutlineLogo.displayName = "PlayCardKOutlineLogo";

export const PlayCardKOutlineLogoMetadata = {
  id: "play-card-k-outline",
  baseId: "play-card-k-outline",
  variant: "default",
  name: "Play Card K Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCardKOutlineLogo;
