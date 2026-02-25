/**
 * Auto-generated logo component: Arrows Up Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsUpRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsUpRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsUpRightOutlineLogoProps>(
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
      <path d="M17 21l4 -4l-4 -4" />
  <path d="M21 17h-11a3 3 0 0 1 -3 -3v-11" />
  <path d="M11 7l-4 -4l-4 4" />
    </svg>
  )
);

ArrowsUpRightOutlineLogo.displayName = "ArrowsUpRightOutlineLogo";

export const ArrowsUpRightOutlineLogoMetadata = {
  id: "arrows-up-right-outline",
  baseId: "arrows-up-right-outline",
  variant: "default",
  name: "Arrows Up Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsUpRightOutlineLogo;
