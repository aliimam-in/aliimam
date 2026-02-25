/**
 * Auto-generated logo component: Arrow Rotary Straight Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRotaryStraightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRotaryStraightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRotaryStraightOutlineLogoProps>(
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
      <path d="M10 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M13 16v5" />
  <path d="M13 3v7" />
  <path d="M9 7l4 -4l4 4" />
    </svg>
  )
);

ArrowRotaryStraightOutlineLogo.displayName = "ArrowRotaryStraightOutlineLogo";

export const ArrowRotaryStraightOutlineLogoMetadata = {
  id: "arrow-rotary-straight-outline",
  baseId: "arrow-rotary-straight-outline",
  variant: "default",
  name: "Arrow Rotary Straight Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRotaryStraightOutlineLogo;
