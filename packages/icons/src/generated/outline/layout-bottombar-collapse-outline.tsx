/**
 * Auto-generated logo component: Layout Bottombar Collapse Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutBottombarCollapseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutBottombarCollapseOutlineLogo = React.forwardRef<SVGSVGElement, LayoutBottombarCollapseOutlineLogoProps>(
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
      <path d="M20 6v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2" />
  <path d="M20 15h-16" />
  <path d="M14 8l-2 2l-2 -2" />
    </svg>
  )
);

LayoutBottombarCollapseOutlineLogo.displayName = "LayoutBottombarCollapseOutlineLogo";

export const LayoutBottombarCollapseOutlineLogoMetadata = {
  id: "layout-bottombar-collapse-outline",
  baseId: "layout-bottombar-collapse-outline",
  variant: "default",
  name: "Layout Bottombar Collapse Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutBottombarCollapseOutlineLogo;
