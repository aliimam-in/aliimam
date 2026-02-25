/**
 * Auto-generated logo component: Sort Ascending Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SortAscendingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SortAscendingOutlineLogo = React.forwardRef<SVGSVGElement, SortAscendingOutlineLogoProps>(
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
      <path d="M4 6l7 0" />
  <path d="M4 12l7 0" />
  <path d="M4 18l9 0" />
  <path d="M15 9l3 -3l3 3" />
  <path d="M18 6l0 12" />
    </svg>
  )
);

SortAscendingOutlineLogo.displayName = "SortAscendingOutlineLogo";

export const SortAscendingOutlineLogoMetadata = {
  id: "sort-ascending-outline",
  baseId: "sort-ascending-outline",
  variant: "default",
  name: "Sort Ascending Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SortAscendingOutlineLogo;
