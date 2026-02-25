/**
 * Auto-generated logo component: Sort Z A Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SortZAOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SortZAOutlineLogo = React.forwardRef<SVGSVGElement, SortZAOutlineLogoProps>(
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
      <path d="M4 8h4l-4 8h4" />
  <path d="M16 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M16 13h4" />
  <path d="M11 12h2" />
    </svg>
  )
);

SortZAOutlineLogo.displayName = "SortZAOutlineLogo";

export const SortZAOutlineLogoMetadata = {
  id: "sort-z-a-outline",
  baseId: "sort-z-a-outline",
  variant: "default",
  name: "Sort Z A Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SortZAOutlineLogo;
