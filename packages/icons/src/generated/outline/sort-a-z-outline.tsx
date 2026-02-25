/**
 * Auto-generated logo component: Sort A Z Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SortAZOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SortAZOutlineLogo = React.forwardRef<SVGSVGElement, SortAZOutlineLogoProps>(
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
      <path d="M16 8h4l-4 8h4" />
  <path d="M4 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M4 13h4" />
  <path d="M11 12h2" />
    </svg>
  )
);

SortAZOutlineLogo.displayName = "SortAZOutlineLogo";

export const SortAZOutlineLogoMetadata = {
  id: "sort-a-z-outline",
  baseId: "sort-a-z-outline",
  variant: "default",
  name: "Sort A Z Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SortAZOutlineLogo;
