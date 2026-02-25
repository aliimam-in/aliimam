/**
 * Auto-generated logo component: Layout Align Top Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutAlignTopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutAlignTopOutlineLogo = React.forwardRef<SVGSVGElement, LayoutAlignTopOutlineLogoProps>(
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
      <path d="M4 4l16 0" />
  <path d="M9 10a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -8" />
    </svg>
  )
);

LayoutAlignTopOutlineLogo.displayName = "LayoutAlignTopOutlineLogo";

export const LayoutAlignTopOutlineLogoMetadata = {
  id: "layout-align-top-outline",
  baseId: "layout-align-top-outline",
  variant: "default",
  name: "Layout Align Top Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutAlignTopOutlineLogo;
