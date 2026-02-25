/**
 * Auto-generated logo component: Layout Align Right (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutAlignRightFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutAlignRightFilledLogo = React.forwardRef<SVGSVGElement, LayoutAlignRightFilledLogoProps>(
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
      <path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1 -2 0v-16a1 1 0 0 1 1 -1" />
  <path d="M14 8a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

LayoutAlignRightFilledLogo.displayName = "LayoutAlignRightFilledLogo";

export const LayoutAlignRightFilledLogoMetadata = {
  id: "layout-align-right_filled",
  baseId: "layout-align-right",
  variant: "filled",
  name: "Layout Align Right",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutAlignRightFilledLogo;
