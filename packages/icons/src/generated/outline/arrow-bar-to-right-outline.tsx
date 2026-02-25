/**
 * Auto-generated logo component: Arrow Bar To Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarToRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarToRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarToRightOutlineLogoProps>(
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
  <path d="M20 4l0 16" />
    </svg>
  )
);

ArrowBarToRightOutlineLogo.displayName = "ArrowBarToRightOutlineLogo";

export const ArrowBarToRightOutlineLogoMetadata = {
  id: "arrow-bar-to-right-outline",
  baseId: "arrow-bar-to-right-outline",
  variant: "default",
  name: "Arrow Bar To Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarToRightOutlineLogo;
