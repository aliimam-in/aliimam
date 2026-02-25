/**
 * Auto-generated logo component: Panel Top Open (default)
 * Category: panel
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelTopOpenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelTopOpenLogo = React.forwardRef<SVGSVGElement, PanelTopOpenLogoProps>(
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
  <path d="m15 14-3 3-3-3" />
    </svg>
  )
);

PanelTopOpenLogo.displayName = "PanelTopOpenLogo";

export const PanelTopOpenLogoMetadata = {
  id: "panel-top-open",
  baseId: "panel-top-open",
  variant: "default",
  name: "Panel Top Open",
  category: "panel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelTopOpenLogo;
