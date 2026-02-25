/**
 * Auto-generated logo component: Filter Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilterPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilterPauseOutlineLogo = React.forwardRef<SVGSVGElement, FilterPauseOutlineLogoProps>(
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
      <path d="M12.97 19.677l-3.97 1.323v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

FilterPauseOutlineLogo.displayName = "FilterPauseOutlineLogo";

export const FilterPauseOutlineLogoMetadata = {
  id: "filter-pause-outline",
  baseId: "filter-pause-outline",
  variant: "default",
  name: "Filter Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilterPauseOutlineLogo;
