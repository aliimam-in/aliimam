/**
 * Auto-generated logo component: Puzzle Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PuzzleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PuzzleOffOutlineLogo = React.forwardRef<SVGSVGElement, PuzzleOffOutlineLogoProps>(
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
      <path d="M8.18 4.171a2 2 0 0 1 3.82 .829v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 .819 3.825m-2.819 1.175v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 1 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 1 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PuzzleOffOutlineLogo.displayName = "PuzzleOffOutlineLogo";

export const PuzzleOffOutlineLogoMetadata = {
  id: "puzzle-off-outline",
  baseId: "puzzle-off-outline",
  variant: "default",
  name: "Puzzle Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PuzzleOffOutlineLogo;
