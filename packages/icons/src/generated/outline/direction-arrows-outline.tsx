/**
 * Auto-generated logo component: Direction Arrows Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DirectionArrowsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DirectionArrowsOutlineLogo = React.forwardRef<SVGSVGElement, DirectionArrowsOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M8 11l-1 1l1 1" />
  <path d="M11 8l1 -1l1 1" />
  <path d="M16 11l1 1l-1 1" />
  <path d="M11 16l1 1l1 -1" />
    </svg>
  )
);

DirectionArrowsOutlineLogo.displayName = "DirectionArrowsOutlineLogo";

export const DirectionArrowsOutlineLogoMetadata = {
  id: "direction-arrows-outline",
  baseId: "direction-arrows-outline",
  variant: "default",
  name: "Direction Arrows Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DirectionArrowsOutlineLogo;
