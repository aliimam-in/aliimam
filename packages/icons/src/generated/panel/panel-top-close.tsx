/**
 * Auto-generated logo component: Panel Top Close (default)
 * Category: panel
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelTopCloseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelTopCloseLogo = React.forwardRef<SVGSVGElement, PanelTopCloseLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="m9 16 3-3 3 3" />
    </svg>
  )
);

PanelTopCloseLogo.displayName = "PanelTopCloseLogo";

export const PanelTopCloseLogoMetadata = {
  id: "panel-top-close",
  baseId: "panel-top-close",
  variant: "default",
  name: "Panel Top Close",
  category: "panel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelTopCloseLogo;
