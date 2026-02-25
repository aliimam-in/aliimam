/**
 * Auto-generated logo component: Arrow Iteration Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowIterationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowIterationOutlineLogo = React.forwardRef<SVGSVGElement, ArrowIterationOutlineLogoProps>(
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
      <path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5" />
  <path d="M3 16h18" />
  <path d="M18 13l3 3l-3 3" />
    </svg>
  )
);

ArrowIterationOutlineLogo.displayName = "ArrowIterationOutlineLogo";

export const ArrowIterationOutlineLogoMetadata = {
  id: "arrow-iteration-outline",
  baseId: "arrow-iteration-outline",
  variant: "default",
  name: "Arrow Iteration Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowIterationOutlineLogo;
