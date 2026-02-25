/**
 * Auto-generated logo component: Arrow Narrow Left Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowNarrowLeftDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowNarrowLeftDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowNarrowLeftDashedOutlineLogoProps>(
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
      <path d="M5 12h6m3 0h1.5m3 0h.5" />
  <path d="M5 12l4 4" />
  <path d="M5 12l4 -4" />
    </svg>
  )
);

ArrowNarrowLeftDashedOutlineLogo.displayName = "ArrowNarrowLeftDashedOutlineLogo";

export const ArrowNarrowLeftDashedOutlineLogoMetadata = {
  id: "arrow-narrow-left-dashed-outline",
  baseId: "arrow-narrow-left-dashed-outline",
  variant: "default",
  name: "Arrow Narrow Left Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowNarrowLeftDashedOutlineLogo;
