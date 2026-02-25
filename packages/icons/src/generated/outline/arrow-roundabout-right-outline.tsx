/**
 * Auto-generated logo component: Arrow Roundabout Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRoundaboutRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRoundaboutRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRoundaboutRightOutlineLogoProps>(
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
      <path d="M21 9h-8a5 5 0 1 0 -5 5v7" />
  <path d="M17 5l4 4l-4 4" />
    </svg>
  )
);

ArrowRoundaboutRightOutlineLogo.displayName = "ArrowRoundaboutRightOutlineLogo";

export const ArrowRoundaboutRightOutlineLogoMetadata = {
  id: "arrow-roundabout-right-outline",
  baseId: "arrow-roundabout-right-outline",
  variant: "default",
  name: "Arrow Roundabout Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRoundaboutRightOutlineLogo;
