/**
 * Auto-generated logo component: Arrow Narrow Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowNarrowLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowNarrowLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowNarrowLeftOutlineLogoProps>(
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
  <path d="M5 12l4 4" />
  <path d="M5 12l4 -4" />
    </svg>
  )
);

ArrowNarrowLeftOutlineLogo.displayName = "ArrowNarrowLeftOutlineLogo";

export const ArrowNarrowLeftOutlineLogoMetadata = {
  id: "arrow-narrow-left-outline",
  baseId: "arrow-narrow-left-outline",
  variant: "default",
  name: "Arrow Narrow Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowNarrowLeftOutlineLogo;
