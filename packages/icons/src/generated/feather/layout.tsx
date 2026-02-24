/**
 * Auto-generated logo component: Layout (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutLogo = React.forwardRef<SVGSVGElement, LayoutLogoProps>(
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
    </svg>
  )
);

LayoutLogo.displayName = "LayoutLogo";

export const LayoutLogoMetadata = {
  id: "layout",
  baseId: "layout",
  variant: "default",
  name: "Layout",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutLogo;
