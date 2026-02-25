/**
 * Auto-generated logo component: Filter 2 Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2UpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2UpOutlineLogo = React.forwardRef<SVGSVGElement, Filter2UpOutlineLogoProps>(
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
  <path d="M9 18h3" />
  <path d="M19 22v-6m0 0l3 3m-3 -3l-3 3" />
    </svg>
  )
);

Filter2UpOutlineLogo.displayName = "Filter2UpOutlineLogo";

export const Filter2UpOutlineLogoMetadata = {
  id: "filter-2-up-outline",
  baseId: "filter-2-up-outline",
  variant: "default",
  name: "Filter 2 Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2UpOutlineLogo;
