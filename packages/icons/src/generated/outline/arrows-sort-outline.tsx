/**
 * Auto-generated logo component: Arrows Sort Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsSortOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsSortOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsSortOutlineLogoProps>(
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
      <path d="M3 9l4 -4l4 4m-4 -4v14" />
  <path d="M21 15l-4 4l-4 -4m4 4v-14" />
    </svg>
  )
);

ArrowsSortOutlineLogo.displayName = "ArrowsSortOutlineLogo";

export const ArrowsSortOutlineLogoMetadata = {
  id: "arrows-sort-outline",
  baseId: "arrows-sort-outline",
  variant: "default",
  name: "Arrows Sort Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsSortOutlineLogo;
