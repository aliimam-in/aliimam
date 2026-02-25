/**
 * Auto-generated logo component: Layout Align Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutAlignRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutAlignRightOutlineLogo = React.forwardRef<SVGSVGElement, LayoutAlignRightOutlineLogoProps>(
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
      <path d="M20 4l0 16" />
  <path d="M4 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -2" />
    </svg>
  )
);

LayoutAlignRightOutlineLogo.displayName = "LayoutAlignRightOutlineLogo";

export const LayoutAlignRightOutlineLogoMetadata = {
  id: "layout-align-right-outline",
  baseId: "layout-align-right-outline",
  variant: "default",
  name: "Layout Align Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutAlignRightOutlineLogo;
