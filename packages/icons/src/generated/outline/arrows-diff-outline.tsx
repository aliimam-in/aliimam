/**
 * Auto-generated logo component: Arrows Diff Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDiffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDiffOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDiffOutlineLogoProps>(
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
      <path d="M11 16h10" />
  <path d="M11 16l4 4" />
  <path d="M11 16l4 -4" />
  <path d="M13 8h-10" />
  <path d="M13 8l-4 4" />
  <path d="M13 8l-4 -4" />
    </svg>
  )
);

ArrowsDiffOutlineLogo.displayName = "ArrowsDiffOutlineLogo";

export const ArrowsDiffOutlineLogoMetadata = {
  id: "arrows-diff-outline",
  baseId: "arrows-diff-outline",
  variant: "default",
  name: "Arrows Diff Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDiffOutlineLogo;
