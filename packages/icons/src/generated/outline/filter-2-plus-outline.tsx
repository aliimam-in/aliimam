/**
 * Auto-generated logo component: Filter 2 Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2PlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2PlusOutlineLogo = React.forwardRef<SVGSVGElement, Filter2PlusOutlineLogoProps>(
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
  <path d="M6 12h10" />
  <path d="M9 18h3" />
  <path d="M19 15v6" />
  <path d="M16 18h6" />
    </svg>
  )
);

Filter2PlusOutlineLogo.displayName = "Filter2PlusOutlineLogo";

export const Filter2PlusOutlineLogoMetadata = {
  id: "filter-2-plus-outline",
  baseId: "filter-2-plus-outline",
  variant: "default",
  name: "Filter 2 Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2PlusOutlineLogo;
