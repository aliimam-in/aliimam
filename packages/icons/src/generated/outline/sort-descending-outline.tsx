/**
 * Auto-generated logo component: Sort Descending Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SortDescendingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SortDescendingOutlineLogo = React.forwardRef<SVGSVGElement, SortDescendingOutlineLogoProps>(
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
      <path d="M4 6l9 0" />
  <path d="M4 12l7 0" />
  <path d="M4 18l7 0" />
  <path d="M15 15l3 3l3 -3" />
  <path d="M18 6l0 12" />
    </svg>
  )
);

SortDescendingOutlineLogo.displayName = "SortDescendingOutlineLogo";

export const SortDescendingOutlineLogoMetadata = {
  id: "sort-descending-outline",
  baseId: "sort-descending-outline",
  variant: "default",
  name: "Sort Descending Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SortDescendingOutlineLogo;
