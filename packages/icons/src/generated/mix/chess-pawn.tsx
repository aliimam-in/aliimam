/**
 * Auto-generated logo component: Chess Pawn (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChessPawnLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChessPawnLogo = React.forwardRef<SVGSVGElement, ChessPawnLogoProps>(
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
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
  <path d="m14.5 10 1.5 8" />
  <path d="M7 10h10" />
  <path d="m8 18 1.5-8" />
  <circle cx="12" cy="6" r="4" />
    </svg>
  )
);

ChessPawnLogo.displayName = "ChessPawnLogo";

export const ChessPawnLogoMetadata = {
  id: "chess-pawn",
  baseId: "chess-pawn",
  variant: "default",
  name: "Chess Pawn",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChessPawnLogo;
