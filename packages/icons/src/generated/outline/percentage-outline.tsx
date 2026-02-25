/**
 * Auto-generated logo component: Percentage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PercentageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PercentageOutlineLogo = React.forwardRef<SVGSVGElement, PercentageOutlineLogoProps>(
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
      <path d="M16 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M6 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M6 18l12 -12" />
    </svg>
  )
);

PercentageOutlineLogo.displayName = "PercentageOutlineLogo";

export const PercentageOutlineLogoMetadata = {
  id: "percentage-outline",
  baseId: "percentage-outline",
  variant: "default",
  name: "Percentage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PercentageOutlineLogo;
