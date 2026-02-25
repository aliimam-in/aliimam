/**
 * Auto-generated logo component: Sort Descending Letters Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SortDescendingLettersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SortDescendingLettersOutlineLogo = React.forwardRef<SVGSVGElement, SortDescendingLettersOutlineLogoProps>(
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
      <path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
  <path d="M19 10h-4l4 -7h-4" />
  <path d="M4 15l3 3l3 -3" />
  <path d="M7 6v12" />
    </svg>
  )
);

SortDescendingLettersOutlineLogo.displayName = "SortDescendingLettersOutlineLogo";

export const SortDescendingLettersOutlineLogoMetadata = {
  id: "sort-descending-letters-outline",
  baseId: "sort-descending-letters-outline",
  variant: "default",
  name: "Sort Descending Letters Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SortDescendingLettersOutlineLogo;
