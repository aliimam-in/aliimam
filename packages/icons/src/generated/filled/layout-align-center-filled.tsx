/**
 * Auto-generated logo component: Layout Align Center Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutAlignCenterFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutAlignCenterFilledLogo = React.forwardRef<SVGSVGElement, LayoutAlignCenterFilledLogoProps>(
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
      <path d="M12 3a1 1 0 0 1 1 1v4h3a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-3v4a1 1 0 0 1 -2 0v-4h-3a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h3v-4a1 1 0 0 1 1 -1" />
    </svg>
  )
);

LayoutAlignCenterFilledLogo.displayName = "LayoutAlignCenterFilledLogo";

export const LayoutAlignCenterFilledLogoMetadata = {
  id: "layout-align-center-filled",
  baseId: "layout-align-center-filled",
  variant: "default",
  name: "Layout Align Center Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutAlignCenterFilledLogo;
