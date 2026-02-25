/**
 * Auto-generated logo component: Layout Distribute Horizontal Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutDistributeHorizontalFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutDistributeHorizontalFilledLogo = React.forwardRef<SVGSVGElement, LayoutDistributeHorizontalFilledLogoProps>(
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
      <path d="M20 3a1 1 0 0 1 0 2h-16a1 1 0 1 1 0 -2z" />
  <path d="M20 19a1 1 0 0 1 0 2h-16a1 1 0 0 1 0 -2z" />
  <path d="M16 8a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

LayoutDistributeHorizontalFilledLogo.displayName = "LayoutDistributeHorizontalFilledLogo";

export const LayoutDistributeHorizontalFilledLogoMetadata = {
  id: "layout-distribute-horizontal-filled",
  baseId: "layout-distribute-horizontal-filled",
  variant: "default",
  name: "Layout Distribute Horizontal Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutDistributeHorizontalFilledLogo;
