/**
 * Auto-generated logo component: Arrow Bar Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarRightOutlineLogoProps>(
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
      <path d="M20 12l-10 0" />
  <path d="M20 12l-4 4" />
  <path d="M20 12l-4 -4" />
  <path d="M4 4l0 16" />
    </svg>
  )
);

ArrowBarRightOutlineLogo.displayName = "ArrowBarRightOutlineLogo";

export const ArrowBarRightOutlineLogoMetadata = {
  id: "arrow-bar-right-outline",
  baseId: "arrow-bar-right-outline",
  variant: "default",
  name: "Arrow Bar Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarRightOutlineLogo;
