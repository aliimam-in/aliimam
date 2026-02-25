/**
 * Auto-generated logo component: Play Card 10 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard10OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard10OutlineLogo = React.forwardRef<SVGSVGElement, PlayCard10OutlineLogoProps>(
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
  <path d="M9 9v6" />
  <path d="M12 13c0 1.105 .672 2 1.5 2s1.5 -.895 1.5 -2v-2c0 -1.105 -.672 -2 -1.5 -2s-1.5 .895 -1.5 2l0 2" />
    </svg>
  )
);

PlayCard10OutlineLogo.displayName = "PlayCard10OutlineLogo";

export const PlayCard10OutlineLogoMetadata = {
  id: "play-card-10-outline",
  baseId: "play-card-10-outline",
  variant: "default",
  name: "Play Card 10 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard10OutlineLogo;
