/**
 * Auto-generated logo component: Play Card 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard4OutlineLogo = React.forwardRef<SVGSVGElement, PlayCard4OutlineLogoProps>(
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
  <path d="M10 9v2a1 1 0 0 0 1 1h3" />
  <path d="M14 9v6" />
    </svg>
  )
);

PlayCard4OutlineLogo.displayName = "PlayCard4OutlineLogo";

export const PlayCard4OutlineLogoMetadata = {
  id: "play-card-4-outline",
  baseId: "play-card-4-outline",
  variant: "default",
  name: "Play Card 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard4OutlineLogo;
