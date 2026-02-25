/**
 * Auto-generated logo component: Layout Align Bottom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutAlignBottomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutAlignBottomOutlineLogo = React.forwardRef<SVGSVGElement, LayoutAlignBottomOutlineLogoProps>(
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
      <path d="M4 20l16 0" />
  <path d="M9 6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -8" />
    </svg>
  )
);

LayoutAlignBottomOutlineLogo.displayName = "LayoutAlignBottomOutlineLogo";

export const LayoutAlignBottomOutlineLogoMetadata = {
  id: "layout-align-bottom-outline",
  baseId: "layout-align-bottom-outline",
  variant: "default",
  name: "Layout Align Bottom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutAlignBottomOutlineLogo;
