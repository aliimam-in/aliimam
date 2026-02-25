/**
 * Auto-generated logo component: Baseline Density Medium Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BaselineDensityMediumOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BaselineDensityMediumOutlineLogo = React.forwardRef<SVGSVGElement, BaselineDensityMediumOutlineLogoProps>(
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
      <path d="M4 20h16" />
  <path d="M4 12h16" />
  <path d="M4 4h16" />
    </svg>
  )
);

BaselineDensityMediumOutlineLogo.displayName = "BaselineDensityMediumOutlineLogo";

export const BaselineDensityMediumOutlineLogoMetadata = {
  id: "baseline-density-medium-outline",
  baseId: "baseline-density-medium-outline",
  variant: "default",
  name: "Baseline Density Medium Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BaselineDensityMediumOutlineLogo;
