/**
 * Auto-generated logo component: Play Card 7 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard7OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard7OutlineLogo = React.forwardRef<SVGSVGElement, PlayCard7OutlineLogoProps>(
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
  <path d="M10 9h4l-2 6" />
  <path d="M8 6h.01" />
  <path d="M16 18h.01" />
    </svg>
  )
);

PlayCard7OutlineLogo.displayName = "PlayCard7OutlineLogo";

export const PlayCard7OutlineLogoMetadata = {
  id: "play-card-7-outline",
  baseId: "play-card-7-outline",
  variant: "default",
  name: "Play Card 7 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard7OutlineLogo;
