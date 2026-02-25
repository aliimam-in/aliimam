/**
 * Auto-generated logo component: Arrow Fork Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowForkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowForkOutlineLogo = React.forwardRef<SVGSVGElement, ArrowForkOutlineLogoProps>(
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
      <path d="M16 3h5v5" />
  <path d="M8 3h-5v5" />
  <path d="M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
  <path d="M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v.93" />
    </svg>
  )
);

ArrowForkOutlineLogo.displayName = "ArrowForkOutlineLogo";

export const ArrowForkOutlineLogoMetadata = {
  id: "arrow-fork-outline",
  baseId: "arrow-fork-outline",
  variant: "default",
  name: "Arrow Fork Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowForkOutlineLogo;
