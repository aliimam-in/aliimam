/**
 * Auto-generated logo component: Filters Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FiltersFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FiltersFilledLogo = React.forwardRef<SVGSVGElement, FiltersFilledLogoProps>(
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
      <path d="M19.396 11.056a6 6 0 0 1 -5.647 10.506q .206 -.21 .396 -.44a8 8 0 0 0 1.789 -6.155a8.02 8.02 0 0 0 3.462 -3.911" />
  <path d="M4.609 11.051a7.99 7.99 0 0 0 9.386 4.698a6 6 0 1 1 -9.534 -4.594z" />
  <path d="M12 2a6 6 0 1 1 -6 6l.004 -.225a6 6 0 0 1 5.996 -5.775" />
    </svg>
  )
);

FiltersFilledLogo.displayName = "FiltersFilledLogo";

export const FiltersFilledLogoMetadata = {
  id: "filters-filled",
  baseId: "filters-filled",
  variant: "default",
  name: "Filters Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FiltersFilledLogo;
