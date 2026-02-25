/**
 * Auto-generated logo component: Arrow Roundabout Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRoundaboutLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRoundaboutLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRoundaboutLeftOutlineLogoProps>(
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
      <path d="M3 9h8a5 5 0 1 1 5 5v7" />
  <path d="M7 5l-4 4l4 4" />
    </svg>
  )
);

ArrowRoundaboutLeftOutlineLogo.displayName = "ArrowRoundaboutLeftOutlineLogo";

export const ArrowRoundaboutLeftOutlineLogoMetadata = {
  id: "arrow-roundabout-left-outline",
  baseId: "arrow-roundabout-left-outline",
  variant: "default",
  name: "Arrow Roundabout Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRoundaboutLeftOutlineLogo;
