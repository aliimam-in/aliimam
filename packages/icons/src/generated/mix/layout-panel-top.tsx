/**
 * Auto-generated logo component: Layout Panel Top (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutPanelTopLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutPanelTopLogo = React.forwardRef<SVGSVGElement, LayoutPanelTopLogoProps>(
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
      <rect width="18" height="7" x="3" y="3" rx="1" />
  <rect width="7" height="7" x="3" y="14" rx="1" />
  <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  )
);

LayoutPanelTopLogo.displayName = "LayoutPanelTopLogo";

export const LayoutPanelTopLogoMetadata = {
  id: "layout-panel-top",
  baseId: "layout-panel-top",
  variant: "default",
  name: "Layout Panel Top",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutPanelTopLogo;
