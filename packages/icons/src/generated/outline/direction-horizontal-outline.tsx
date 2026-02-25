/**
 * Auto-generated logo component: Direction Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DirectionHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DirectionHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, DirectionHorizontalOutlineLogoProps>(
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
      <path d="M10 9l-3 3l3 3" />
  <path d="M14 9l3 3l-3 3" />
    </svg>
  )
);

DirectionHorizontalOutlineLogo.displayName = "DirectionHorizontalOutlineLogo";

export const DirectionHorizontalOutlineLogoMetadata = {
  id: "direction-horizontal-outline",
  baseId: "direction-horizontal-outline",
  variant: "default",
  name: "Direction Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DirectionHorizontalOutlineLogo;
