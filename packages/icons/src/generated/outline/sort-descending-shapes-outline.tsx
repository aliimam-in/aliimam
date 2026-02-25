/**
 * Auto-generated logo component: Sort Descending Shapes Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SortDescendingShapesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SortDescendingShapesOutlineLogo = React.forwardRef<SVGSVGElement, SortDescendingShapesOutlineLogoProps>(
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
      <path d="M4 15l3 3l3 -3" />
  <path d="M7 6v12" />
  <path d="M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4" />
  <path d="M17 4l-3.5 6h7l-3.5 -6" />
    </svg>
  )
);

SortDescendingShapesOutlineLogo.displayName = "SortDescendingShapesOutlineLogo";

export const SortDescendingShapesOutlineLogoMetadata = {
  id: "sort-descending-shapes-outline",
  baseId: "sort-descending-shapes-outline",
  variant: "default",
  name: "Sort Descending Shapes Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SortDescendingShapesOutlineLogo;
