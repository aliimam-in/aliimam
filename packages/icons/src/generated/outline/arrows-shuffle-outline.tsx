/**
 * Auto-generated logo component: Arrows Shuffle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsShuffleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsShuffleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsShuffleOutlineLogoProps>(
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
      <path d="M18 4l3 3l-3 3" />
  <path d="M18 20l3 -3l-3 -3" />
  <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
  <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
    </svg>
  )
);

ArrowsShuffleOutlineLogo.displayName = "ArrowsShuffleOutlineLogo";

export const ArrowsShuffleOutlineLogoMetadata = {
  id: "arrows-shuffle-outline",
  baseId: "arrows-shuffle-outline",
  variant: "default",
  name: "Arrows Shuffle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsShuffleOutlineLogo;
