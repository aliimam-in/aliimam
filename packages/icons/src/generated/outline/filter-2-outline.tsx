/**
 * Auto-generated logo component: Filter 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2OutlineLogo = React.forwardRef<SVGSVGElement, Filter2OutlineLogoProps>(
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
      <path d="M4 6h16" />
  <path d="M6 12h12" />
  <path d="M9 18h6" />
    </svg>
  )
);

Filter2OutlineLogo.displayName = "Filter2OutlineLogo";

export const Filter2OutlineLogoMetadata = {
  id: "filter-2-outline",
  baseId: "filter-2-outline",
  variant: "default",
  name: "Filter 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2OutlineLogo;
