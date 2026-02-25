/**
 * Auto-generated logo component: Panel Left Close (default)
 * Category: panel
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelLeftCloseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelLeftCloseLogo = React.forwardRef<SVGSVGElement, PanelLeftCloseLogoProps>(
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
  <path d="M9 3v18" />
  <path d="m16 15-3-3 3-3" />
    </svg>
  )
);

PanelLeftCloseLogo.displayName = "PanelLeftCloseLogo";

export const PanelLeftCloseLogoMetadata = {
  id: "panel-left-close",
  baseId: "panel-left-close",
  variant: "default",
  name: "Panel Left Close",
  category: "panel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelLeftCloseLogo;
