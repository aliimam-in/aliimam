/**
 * Auto-generated logo component: Filter Spark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilterSparkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilterSparkOutlineLogo = React.forwardRef<SVGSVGElement, FilterSparkOutlineLogoProps>(
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
      <path d="M15 12.5v-.5l4.414 -4.414a2 2 0 0 0 .586 -1.414v-2.172h-16v2.227c0 .497 .185 .977 .52 1.345l4.48 4.928v8.5l2 -.667" />
  <path d="M18.5 22a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
    </svg>
  )
);

FilterSparkOutlineLogo.displayName = "FilterSparkOutlineLogo";

export const FilterSparkOutlineLogoMetadata = {
  id: "filter-spark-outline",
  baseId: "filter-spark-outline",
  variant: "default",
  name: "Filter Spark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilterSparkOutlineLogo;
