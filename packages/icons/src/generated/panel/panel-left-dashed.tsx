/**
 * Auto-generated logo component: Panel Left Dashed (default)
 * Category: panel
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelLeftDashedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelLeftDashedLogo = React.forwardRef<SVGSVGElement, PanelLeftDashedLogoProps>(
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
  <path d="M9 14v1" />
  <path d="M9 19v2" />
  <path d="M9 3v2" />
  <path d="M9 9v1" />
    </svg>
  )
);

PanelLeftDashedLogo.displayName = "PanelLeftDashedLogo";

export const PanelLeftDashedLogoMetadata = {
  id: "panel-left-dashed",
  baseId: "panel-left-dashed",
  variant: "default",
  name: "Panel Left Dashed",
  category: "panel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelLeftDashedLogo;
