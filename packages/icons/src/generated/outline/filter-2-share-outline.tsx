/**
 * Auto-generated logo component: Filter 2 Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2ShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2ShareOutlineLogo = React.forwardRef<SVGSVGElement, Filter2ShareOutlineLogoProps>(
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
  <path d="M9 18h3.5" />
  <path d="M16 22l5 -5" />
  <path d="M21 17v4.5" />
  <path d="M21 17h-4.5" />
    </svg>
  )
);

Filter2ShareOutlineLogo.displayName = "Filter2ShareOutlineLogo";

export const Filter2ShareOutlineLogoMetadata = {
  id: "filter-2-share-outline",
  baseId: "filter-2-share-outline",
  variant: "default",
  name: "Filter 2 Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2ShareOutlineLogo;
