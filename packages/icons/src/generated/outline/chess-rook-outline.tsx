/**
 * Auto-generated logo component: Chess Rook Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChessRookOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChessRookOutlineLogo = React.forwardRef<SVGSVGElement, ChessRookOutlineLogoProps>(
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
      <path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8" />
  <path d="M8 16l1 -9h6l1 9" />
  <path d="M6 4l.5 3h11l.5 -3" />
  <path d="M10 4v3" />
  <path d="M14 4v3" />
    </svg>
  )
);

ChessRookOutlineLogo.displayName = "ChessRookOutlineLogo";

export const ChessRookOutlineLogoMetadata = {
  id: "chess-rook-outline",
  baseId: "chess-rook-outline",
  variant: "default",
  name: "Chess Rook Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChessRookOutlineLogo;
