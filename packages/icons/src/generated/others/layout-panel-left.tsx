/**
 * Auto-generated logo component: Layout Panel Left (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutPanelLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutPanelLeftLogo = React.forwardRef<SVGSVGElement, LayoutPanelLeftLogoProps>(
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
      <rect width="7" height="18" x="3" y="3" rx="1" />
  <rect width="7" height="7" x="14" y="3" rx="1" />
  <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  )
);

LayoutPanelLeftLogo.displayName = "LayoutPanelLeftLogo";

export const LayoutPanelLeftLogoMetadata = {
  id: "layout-panel-left",
  baseId: "layout-panel-left",
  variant: "default",
  name: "Layout Panel Left",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutPanelLeftLogo;
