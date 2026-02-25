/**
 * Auto-generated logo component: Tournament Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TournamentOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TournamentOutlineLogo = React.forwardRef<SVGSVGElement, TournamentOutlineLogoProps>(
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
      <path d="M2 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M2 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M2 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-3" />
  <path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-2" />
  <path d="M14 10h4" />
    </svg>
  )
);

TournamentOutlineLogo.displayName = "TournamentOutlineLogo";

export const TournamentOutlineLogoMetadata = {
  id: "tournament-outline",
  baseId: "tournament-outline",
  variant: "default",
  name: "Tournament Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TournamentOutlineLogo;
