/**
 * Auto-generated logo component: Sort Ascending Letters Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SortAscendingLettersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SortAscendingLettersOutlineLogo = React.forwardRef<SVGSVGElement, SortAscendingLettersOutlineLogoProps>(
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
      <path d="M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
  <path d="M19 21h-4l4 -7h-4" />
  <path d="M4 15l3 3l3 -3" />
  <path d="M7 6v12" />
    </svg>
  )
);

SortAscendingLettersOutlineLogo.displayName = "SortAscendingLettersOutlineLogo";

export const SortAscendingLettersOutlineLogoMetadata = {
  id: "sort-ascending-letters-outline",
  baseId: "sort-ascending-letters-outline",
  variant: "default",
  name: "Sort Ascending Letters Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SortAscendingLettersOutlineLogo;
