/**
 * Auto-generated logo component: Square Percentage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquarePercentageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquarePercentageOutlineLogo = React.forwardRef<SVGSVGElement, SquarePercentageOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 15.037l6 -6" />
  <path d="M9 9.068v.014" />
  <path d="M15 15.082v.016" />
    </svg>
  )
);

SquarePercentageOutlineLogo.displayName = "SquarePercentageOutlineLogo";

export const SquarePercentageOutlineLogoMetadata = {
  id: "square-percentage-outline",
  baseId: "square-percentage-outline",
  variant: "default",
  name: "Square Percentage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquarePercentageOutlineLogo;
