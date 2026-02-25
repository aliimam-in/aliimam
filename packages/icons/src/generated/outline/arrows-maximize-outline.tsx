/**
 * Auto-generated logo component: Arrows Maximize Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsMaximizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsMaximizeOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsMaximizeOutlineLogoProps>(
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
      <path d="M16 4l4 0l0 4" />
  <path d="M14 10l6 -6" />
  <path d="M8 20l-4 0l0 -4" />
  <path d="M4 20l6 -6" />
  <path d="M16 20l4 0l0 -4" />
  <path d="M14 14l6 6" />
  <path d="M8 4l-4 0l0 4" />
  <path d="M4 4l6 6" />
    </svg>
  )
);

ArrowsMaximizeOutlineLogo.displayName = "ArrowsMaximizeOutlineLogo";

export const ArrowsMaximizeOutlineLogoMetadata = {
  id: "arrows-maximize-outline",
  baseId: "arrows-maximize-outline",
  variant: "default",
  name: "Arrows Maximize Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsMaximizeOutlineLogo;
