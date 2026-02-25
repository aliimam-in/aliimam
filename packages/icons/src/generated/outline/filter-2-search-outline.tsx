/**
 * Auto-generated logo component: Filter 2 Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2SearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2SearchOutlineLogo = React.forwardRef<SVGSVGElement, Filter2SearchOutlineLogoProps>(
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
  <path d="M6 12h8.5" />
  <path d="M9 18h2" />
  <path d="M15 18c0 .796 .316 1.559 .879 2.121c.563 .563 1.326 .879 2.121 .879c.796 0 1.559 -.316 2.121 -.879c.563 -.563 .879 -1.326 .879 -2.121c0 -.796 -.316 -1.559 -.879 -2.121c-.563 -.563 -1.326 -.879 -2.121 -.879c-.796 0 -1.559 .316 -2.121 .879c-.563 .563 -.879 1.326 -.879 2.121" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

Filter2SearchOutlineLogo.displayName = "Filter2SearchOutlineLogo";

export const Filter2SearchOutlineLogoMetadata = {
  id: "filter-2-search-outline",
  baseId: "filter-2-search-outline",
  variant: "default",
  name: "Filter 2 Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2SearchOutlineLogo;
