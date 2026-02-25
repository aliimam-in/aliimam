/**
 * Auto-generated logo component: Play Basketball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayBasketballOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayBasketballOutlineLogo = React.forwardRef<SVGSVGElement, PlayBasketballOutlineLogoProps>(
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
      <path d="M10 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M5 21l3 -3l.75 -1.5" />
  <path d="M14 21v-4l-4 -3l.5 -6" />
  <path d="M5 12l1 -3l4.5 -1l3.5 3l4 1" />
  <path d="M18.5 16a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
    </svg>
  )
);

PlayBasketballOutlineLogo.displayName = "PlayBasketballOutlineLogo";

export const PlayBasketballOutlineLogoMetadata = {
  id: "play-basketball-outline",
  baseId: "play-basketball-outline",
  variant: "default",
  name: "Play Basketball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayBasketballOutlineLogo;
