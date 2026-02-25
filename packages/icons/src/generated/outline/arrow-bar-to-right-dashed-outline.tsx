/**
 * Auto-generated logo component: Arrow Bar To Right Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarToRightDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarToRightDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarToRightDashedOutlineLogoProps>(
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
      <path d="M14 12l-10 0" />
  <path d="M14 12l-4 4" />
  <path d="M14 12l-4 -4" />
  <path d="M20 4l0 3m0 13l0 -3m0 -3.5l0 -3" />
    </svg>
  )
);

ArrowBarToRightDashedOutlineLogo.displayName = "ArrowBarToRightDashedOutlineLogo";

export const ArrowBarToRightDashedOutlineLogoMetadata = {
  id: "arrow-bar-to-right-dashed-outline",
  baseId: "arrow-bar-to-right-dashed-outline",
  variant: "default",
  name: "Arrow Bar To Right Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarToRightDashedOutlineLogo;
