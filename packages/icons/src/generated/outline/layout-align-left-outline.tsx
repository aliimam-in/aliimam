/**
 * Auto-generated logo component: Layout Align Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutAlignLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutAlignLeftOutlineLogo = React.forwardRef<SVGSVGElement, LayoutAlignLeftOutlineLogoProps>(
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
      <path d="M4 4l0 16" />
  <path d="M8 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -2" />
    </svg>
  )
);

LayoutAlignLeftOutlineLogo.displayName = "LayoutAlignLeftOutlineLogo";

export const LayoutAlignLeftOutlineLogoMetadata = {
  id: "layout-align-left-outline",
  baseId: "layout-align-left-outline",
  variant: "default",
  name: "Layout Align Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutAlignLeftOutlineLogo;
