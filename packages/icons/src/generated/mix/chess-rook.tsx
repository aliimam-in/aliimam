/**
 * Auto-generated logo component: Chess Rook (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChessRookLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChessRookLogo = React.forwardRef<SVGSVGElement, ChessRookLogoProps>(
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
  <path d="M10 2v2" />
  <path d="M14 2v2" />
  <path d="m17 18-1-9" />
  <path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" />
  <path d="M6 4h12" />
  <path d="m7 18 1-9" />
    </svg>
  )
);

ChessRookLogo.displayName = "ChessRookLogo";

export const ChessRookLogoMetadata = {
  id: "chess-rook",
  baseId: "chess-rook",
  variant: "default",
  name: "Chess Rook",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChessRookLogo;
