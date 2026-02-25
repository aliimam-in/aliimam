/**
 * Auto-generated logo component: Play Card 5 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard5OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard5OutlineLogo = React.forwardRef<SVGSVGElement, PlayCard5OutlineLogoProps>(
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
  <path d="M10 15h3a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-3v-3h4" />
    </svg>
  )
);

PlayCard5OutlineLogo.displayName = "PlayCard5OutlineLogo";

export const PlayCard5OutlineLogoMetadata = {
  id: "play-card-5-outline",
  baseId: "play-card-5-outline",
  variant: "default",
  name: "Play Card 5 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard5OutlineLogo;
