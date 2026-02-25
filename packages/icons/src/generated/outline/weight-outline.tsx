/**
 * Auto-generated logo component: Weight Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WeightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WeightOutlineLogo = React.forwardRef<SVGSVGElement, WeightOutlineLogoProps>(
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
      <path d="M9 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821" />
    </svg>
  )
);

WeightOutlineLogo.displayName = "WeightOutlineLogo";

export const WeightOutlineLogoMetadata = {
  id: "weight-outline",
  baseId: "weight-outline",
  variant: "default",
  name: "Weight Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WeightOutlineLogo;
