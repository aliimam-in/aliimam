/**
 * Auto-generated logo component: Arrow Narrow Right Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowNarrowRightDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowNarrowRightDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowNarrowRightDashedOutlineLogoProps>(
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
      <path d="M5 12h.5m3 0h1.5m3 0h6" />
  <path d="M15 16l4 -4" />
  <path d="M15 8l4 4" />
    </svg>
  )
);

ArrowNarrowRightDashedOutlineLogo.displayName = "ArrowNarrowRightDashedOutlineLogo";

export const ArrowNarrowRightDashedOutlineLogoMetadata = {
  id: "arrow-narrow-right-dashed-outline",
  baseId: "arrow-narrow-right-dashed-outline",
  variant: "default",
  name: "Arrow Narrow Right Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowNarrowRightDashedOutlineLogo;
