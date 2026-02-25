/**
 * Auto-generated logo component: Sort Ascending 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SortAscending2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SortAscending2OutlineLogo = React.forwardRef<SVGSVGElement, SortAscending2OutlineLogoProps>(
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
      <path d="M14 9l3 -3l3 3" />
  <path d="M5 14.5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5l0 -4" />
  <path d="M17 6v12" />
    </svg>
  )
);

SortAscending2OutlineLogo.displayName = "SortAscending2OutlineLogo";

export const SortAscending2OutlineLogoMetadata = {
  id: "sort-ascending-2-outline",
  baseId: "sort-ascending-2-outline",
  variant: "default",
  name: "Sort Ascending 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SortAscending2OutlineLogo;
