/**
 * Auto-generated logo component: Play Card Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCardOutlineLogo = React.forwardRef<SVGSVGElement, PlayCardOutlineLogoProps>(
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
  <path d="M12 16l-3 -4l3 -4l3 4l-3 4" />
    </svg>
  )
);

PlayCardOutlineLogo.displayName = "PlayCardOutlineLogo";

export const PlayCardOutlineLogoMetadata = {
  id: "play-card-outline",
  baseId: "play-card-outline",
  variant: "default",
  name: "Play Card Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCardOutlineLogo;
