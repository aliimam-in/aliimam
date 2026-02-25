/**
 * Auto-generated logo component: Chess King Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChessKingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChessKingOutlineLogo = React.forwardRef<SVGSVGElement, ChessKingOutlineLogoProps>(
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
  <path d="M8.5 16a3.5 3.5 0 1 1 3.163 -5h.674a3.5 3.5 0 1 1 3.163 5l-7 0" />
  <path d="M9 6h6" />
  <path d="M12 3v8" />
    </svg>
  )
);

ChessKingOutlineLogo.displayName = "ChessKingOutlineLogo";

export const ChessKingOutlineLogoMetadata = {
  id: "chess-king-outline",
  baseId: "chess-king-outline",
  variant: "default",
  name: "Chess King Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChessKingOutlineLogo;
