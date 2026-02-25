/**
 * Auto-generated logo component: Filters Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FiltersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FiltersOutlineLogo = React.forwardRef<SVGSVGElement, FiltersOutlineLogoProps>(
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
      <path d="M7 8a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M8 11a5 5 0 1 0 3.998 1.997" />
  <path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003" />
    </svg>
  )
);

FiltersOutlineLogo.displayName = "FiltersOutlineLogo";

export const FiltersOutlineLogoMetadata = {
  id: "filters-outline",
  baseId: "filters-outline",
  variant: "default",
  name: "Filters Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FiltersOutlineLogo;
