/**
 * Auto-generated logo component: Layout Distribute Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutDistributeVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutDistributeVerticalOutlineLogo = React.forwardRef<SVGSVGElement, LayoutDistributeVerticalOutlineLogoProps>(
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
  <path d="M20 4l0 16" />
  <path d="M9 8a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -8" />
    </svg>
  )
);

LayoutDistributeVerticalOutlineLogo.displayName = "LayoutDistributeVerticalOutlineLogo";

export const LayoutDistributeVerticalOutlineLogoMetadata = {
  id: "layout-distribute-vertical-outline",
  baseId: "layout-distribute-vertical-outline",
  variant: "default",
  name: "Layout Distribute Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutDistributeVerticalOutlineLogo;
