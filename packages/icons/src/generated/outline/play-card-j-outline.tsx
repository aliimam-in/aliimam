/**
 * Auto-generated logo component: Play Card J Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCardJOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCardJOutlineLogo = React.forwardRef<SVGSVGElement, PlayCardJOutlineLogoProps>(
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
  <path d="M10 9h4v4a2 2 0 1 1 -4 0" />
    </svg>
  )
);

PlayCardJOutlineLogo.displayName = "PlayCardJOutlineLogo";

export const PlayCardJOutlineLogoMetadata = {
  id: "play-card-j-outline",
  baseId: "play-card-j-outline",
  variant: "default",
  name: "Play Card J Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCardJOutlineLogo;
