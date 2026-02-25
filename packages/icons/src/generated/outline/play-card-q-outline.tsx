/**
 * Auto-generated logo component: Play Card Q Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCardQOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCardQOutlineLogo = React.forwardRef<SVGSVGElement, PlayCardQOutlineLogoProps>(
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
  <path d="M12 9a2 2 0 0 1 2 2v2a2 2 0 1 1 -4 0v-2a2 2 0 0 1 2 -2" />
  <path d="M13 14l1.5 1.5" />
    </svg>
  )
);

PlayCardQOutlineLogo.displayName = "PlayCardQOutlineLogo";

export const PlayCardQOutlineLogoMetadata = {
  id: "play-card-q-outline",
  baseId: "play-card-q-outline",
  variant: "default",
  name: "Play Card Q Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCardQOutlineLogo;
