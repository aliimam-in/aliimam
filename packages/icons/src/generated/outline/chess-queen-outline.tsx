/**
 * Auto-generated logo component: Chess Queen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChessQueenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChessQueenOutlineLogo = React.forwardRef<SVGSVGElement, ChessQueenOutlineLogoProps>(
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
      <path d="M16 16l2 -11l-4 4l-2 -5l-2 5l-4 -4l2 11" />
  <path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8" />
  <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M5 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M17 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

ChessQueenOutlineLogo.displayName = "ChessQueenOutlineLogo";

export const ChessQueenOutlineLogoMetadata = {
  id: "chess-queen-outline",
  baseId: "chess-queen-outline",
  variant: "default",
  name: "Chess Queen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChessQueenOutlineLogo;
