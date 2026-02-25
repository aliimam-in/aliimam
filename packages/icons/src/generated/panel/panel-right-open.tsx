/**
 * Auto-generated logo component: Panel Right Open (default)
 * Category: panel
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelRightOpenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelRightOpenLogo = React.forwardRef<SVGSVGElement, PanelRightOpenLogoProps>(
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
  <path d="M15 3v18" />
  <path d="m10 15-3-3 3-3" />
    </svg>
  )
);

PanelRightOpenLogo.displayName = "PanelRightOpenLogo";

export const PanelRightOpenLogoMetadata = {
  id: "panel-right-open",
  baseId: "panel-right-open",
  variant: "default",
  name: "Panel Right Open",
  category: "panel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelRightOpenLogo;
