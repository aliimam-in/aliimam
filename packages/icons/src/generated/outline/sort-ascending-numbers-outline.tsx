/**
 * Auto-generated logo component: Sort Ascending Numbers Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SortAscendingNumbersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SortAscendingNumbersOutlineLogo = React.forwardRef<SVGSVGElement, SortAscendingNumbersOutlineLogoProps>(
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
  <path d="M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2" />
  <path d="M15 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19 16v3a2 2 0 0 1 -2 2h-1.5" />
    </svg>
  )
);

SortAscendingNumbersOutlineLogo.displayName = "SortAscendingNumbersOutlineLogo";

export const SortAscendingNumbersOutlineLogoMetadata = {
  id: "sort-ascending-numbers-outline",
  baseId: "sort-ascending-numbers-outline",
  variant: "default",
  name: "Sort Ascending Numbers Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SortAscendingNumbersOutlineLogo;
