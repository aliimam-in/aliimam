/**
 * Auto-generated logo component: World Star Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldStarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldStarOutlineLogo = React.forwardRef<SVGSVGElement, WorldStarOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -9.968 8.948" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h6.4" />
  <path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802" />
  <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01" />
  <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" />
    </svg>
  )
);

WorldStarOutlineLogo.displayName = "WorldStarOutlineLogo";

export const WorldStarOutlineLogoMetadata = {
  id: "world-star-outline",
  baseId: "world-star-outline",
  variant: "default",
  name: "World Star Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldStarOutlineLogo;
