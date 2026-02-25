/**
 * Auto-generated logo component: Loader Quarter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LoaderQuarterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LoaderQuarterOutlineLogo = React.forwardRef<SVGSVGElement, LoaderQuarterOutlineLogoProps>(
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
      <path d="M12 6l0 -3" />
  <path d="M6 12l-3 0" />
  <path d="M7.75 7.75l-2.15 -2.15" />
    </svg>
  )
);

LoaderQuarterOutlineLogo.displayName = "LoaderQuarterOutlineLogo";

export const LoaderQuarterOutlineLogoMetadata = {
  id: "loader-quarter-outline",
  baseId: "loader-quarter-outline",
  variant: "default",
  name: "Loader Quarter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LoaderQuarterOutlineLogo;
