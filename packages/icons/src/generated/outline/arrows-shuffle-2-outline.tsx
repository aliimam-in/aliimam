/**
 * Auto-generated logo component: Arrows Shuffle 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsShuffle2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsShuffle2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowsShuffle2OutlineLogoProps>(
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
  <path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" />
    </svg>
  )
);

ArrowsShuffle2OutlineLogo.displayName = "ArrowsShuffle2OutlineLogo";

export const ArrowsShuffle2OutlineLogoMetadata = {
  id: "arrows-shuffle-2-outline",
  baseId: "arrows-shuffle-2-outline",
  variant: "default",
  name: "Arrows Shuffle 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsShuffle2OutlineLogo;
