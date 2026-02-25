/**
 * Auto-generated logo component: Filter 2 Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2CheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2CheckOutlineLogo = React.forwardRef<SVGSVGElement, Filter2CheckOutlineLogoProps>(
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
  <path d="M9 18h2" />
  <path d="M15 18l2 2l4 -4" />
    </svg>
  )
);

Filter2CheckOutlineLogo.displayName = "Filter2CheckOutlineLogo";

export const Filter2CheckOutlineLogoMetadata = {
  id: "filter-2-check-outline",
  baseId: "filter-2-check-outline",
  variant: "default",
  name: "Filter 2 Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2CheckOutlineLogo;
