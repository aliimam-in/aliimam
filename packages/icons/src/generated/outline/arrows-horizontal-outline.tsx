/**
 * Auto-generated logo component: Arrows Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsHorizontalOutlineLogoProps>(
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
      <path d="M7 8l-4 4l4 4" />
  <path d="M17 8l4 4l-4 4" />
  <path d="M3 12l18 0" />
    </svg>
  )
);

ArrowsHorizontalOutlineLogo.displayName = "ArrowsHorizontalOutlineLogo";

export const ArrowsHorizontalOutlineLogoMetadata = {
  id: "arrows-horizontal-outline",
  baseId: "arrows-horizontal-outline",
  variant: "default",
  name: "Arrows Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsHorizontalOutlineLogo;
