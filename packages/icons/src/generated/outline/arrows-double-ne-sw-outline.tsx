/**
 * Auto-generated logo component: Arrows Double Ne Sw Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDoubleNeSwOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDoubleNeSwOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDoubleNeSwOutlineLogoProps>(
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
      <path d="M3 14l11 -11" />
  <path d="M10 3h4v4" />
  <path d="M10 17v4h4" />
  <path d="M21 10l-11 11" />
    </svg>
  )
);

ArrowsDoubleNeSwOutlineLogo.displayName = "ArrowsDoubleNeSwOutlineLogo";

export const ArrowsDoubleNeSwOutlineLogoMetadata = {
  id: "arrows-double-ne-sw-outline",
  baseId: "arrows-double-ne-sw-outline",
  variant: "default",
  name: "Arrows Double Ne Sw Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDoubleNeSwOutlineLogo;
