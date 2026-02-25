/**
 * Auto-generated logo component: Baseline Density Large Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BaselineDensityLargeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BaselineDensityLargeOutlineLogo = React.forwardRef<SVGSVGElement, BaselineDensityLargeOutlineLogoProps>(
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
      <path d="M4 4h16" />
  <path d="M4 20h16" />
    </svg>
  )
);

BaselineDensityLargeOutlineLogo.displayName = "BaselineDensityLargeOutlineLogo";

export const BaselineDensityLargeOutlineLogoMetadata = {
  id: "baseline-density-large-outline",
  baseId: "baseline-density-large-outline",
  variant: "default",
  name: "Baseline Density Large Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BaselineDensityLargeOutlineLogo;
