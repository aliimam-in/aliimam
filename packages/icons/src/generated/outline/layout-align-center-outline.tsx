/**
 * Auto-generated logo component: Layout Align Center Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutAlignCenterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutAlignCenterOutlineLogo = React.forwardRef<SVGSVGElement, LayoutAlignCenterOutlineLogoProps>(
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
      <path d="M12 4l0 5" />
  <path d="M12 15l0 5" />
  <path d="M6 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -2" />
    </svg>
  )
);

LayoutAlignCenterOutlineLogo.displayName = "LayoutAlignCenterOutlineLogo";

export const LayoutAlignCenterOutlineLogoMetadata = {
  id: "layout-align-center-outline",
  baseId: "layout-align-center-outline",
  variant: "default",
  name: "Layout Align Center Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutAlignCenterOutlineLogo;
