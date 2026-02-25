/**
 * Auto-generated logo component: Arrow Narrow Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowNarrowRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowNarrowRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowNarrowRightOutlineLogoProps>(
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
      <path d="M5 12l14 0" />
  <path d="M15 16l4 -4" />
  <path d="M15 8l4 4" />
    </svg>
  )
);

ArrowNarrowRightOutlineLogo.displayName = "ArrowNarrowRightOutlineLogo";

export const ArrowNarrowRightOutlineLogoMetadata = {
  id: "arrow-narrow-right-outline",
  baseId: "arrow-narrow-right-outline",
  variant: "default",
  name: "Arrow Narrow Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowNarrowRightOutlineLogo;
