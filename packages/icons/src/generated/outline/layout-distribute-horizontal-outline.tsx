/**
 * Auto-generated logo component: Layout Distribute Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutDistributeHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutDistributeHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, LayoutDistributeHorizontalOutlineLogoProps>(
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
  <path d="M4 20l16 0" />
  <path d="M6 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -2" />
    </svg>
  )
);

LayoutDistributeHorizontalOutlineLogo.displayName = "LayoutDistributeHorizontalOutlineLogo";

export const LayoutDistributeHorizontalOutlineLogoMetadata = {
  id: "layout-distribute-horizontal-outline",
  baseId: "layout-distribute-horizontal-outline",
  variant: "default",
  name: "Layout Distribute Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutDistributeHorizontalOutlineLogo;
