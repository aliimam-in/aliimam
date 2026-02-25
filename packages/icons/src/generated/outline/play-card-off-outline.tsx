/**
 * Auto-generated logo component: Play Card Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCardOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCardOffOutlineLogo = React.forwardRef<SVGSVGElement, PlayCardOffOutlineLogoProps>(
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
      <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
  <path d="M16 18h.01" />
  <path d="M13.716 13.712l-1.716 2.288l-3 -4l1.29 -1.72" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PlayCardOffOutlineLogo.displayName = "PlayCardOffOutlineLogo";

export const PlayCardOffOutlineLogoMetadata = {
  id: "play-card-off-outline",
  baseId: "play-card-off-outline",
  variant: "default",
  name: "Play Card Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCardOffOutlineLogo;
