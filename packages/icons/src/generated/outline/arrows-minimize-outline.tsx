/**
 * Auto-generated logo component: Arrows Minimize Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsMinimizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsMinimizeOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsMinimizeOutlineLogoProps>(
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
      <path d="M5 9l4 0l0 -4" />
  <path d="M3 3l6 6" />
  <path d="M5 15l4 0l0 4" />
  <path d="M3 21l6 -6" />
  <path d="M19 9l-4 0l0 -4" />
  <path d="M15 9l6 -6" />
  <path d="M19 15l-4 0l0 4" />
  <path d="M15 15l6 6" />
    </svg>
  )
);

ArrowsMinimizeOutlineLogo.displayName = "ArrowsMinimizeOutlineLogo";

export const ArrowsMinimizeOutlineLogoMetadata = {
  id: "arrows-minimize-outline",
  baseId: "arrows-minimize-outline",
  variant: "default",
  name: "Arrows Minimize Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsMinimizeOutlineLogo;
