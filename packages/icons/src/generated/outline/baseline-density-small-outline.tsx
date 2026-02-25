/**
 * Auto-generated logo component: Baseline Density Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BaselineDensitySmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BaselineDensitySmallOutlineLogo = React.forwardRef<SVGSVGElement, BaselineDensitySmallOutlineLogoProps>(
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
      <path d="M4 3h16" />
  <path d="M4 9h16" />
  <path d="M4 15h16" />
  <path d="M4 21h16" />
    </svg>
  )
);

BaselineDensitySmallOutlineLogo.displayName = "BaselineDensitySmallOutlineLogo";

export const BaselineDensitySmallOutlineLogoMetadata = {
  id: "baseline-density-small-outline",
  baseId: "baseline-density-small-outline",
  variant: "default",
  name: "Baseline Density Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BaselineDensitySmallOutlineLogo;
