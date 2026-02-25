/**
 * Auto-generated logo component: Arrow Bar To Left Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarToLeftDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarToLeftDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarToLeftDashedOutlineLogoProps>(
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
      <path d="M10 12l10 0" />
  <path d="M10 12l4 -4" />
  <path d="M10 12l4 4" />
  <path d="M4 20l0 -3m0 -13l0 3m0 3.5l0 3" />
    </svg>
  )
);

ArrowBarToLeftDashedOutlineLogo.displayName = "ArrowBarToLeftDashedOutlineLogo";

export const ArrowBarToLeftDashedOutlineLogoMetadata = {
  id: "arrow-bar-to-left-dashed-outline",
  baseId: "arrow-bar-to-left-dashed-outline",
  variant: "default",
  name: "Arrow Bar To Left Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarToLeftDashedOutlineLogo;
