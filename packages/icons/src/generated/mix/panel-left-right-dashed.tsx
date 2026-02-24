/**
 * Auto-generated logo component: Panel Left Right Dashed (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelLeftRightDashedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelLeftRightDashedLogo = React.forwardRef<SVGSVGElement, PanelLeftRightDashedLogoProps>(
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
      <path d="M15 10V9" />
  <path d="M15 15v-1" />
  <path d="M15 21v-2" />
  <path d="M15 5V3" />
  <path d="M9 10V9" />
  <path d="M9 15v-1" />
  <path d="M9 21v-2" />
  <path d="M9 5V3" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);

PanelLeftRightDashedLogo.displayName = "PanelLeftRightDashedLogo";

export const PanelLeftRightDashedLogoMetadata = {
  id: "panel-left-right-dashed",
  baseId: "panel-left-right-dashed",
  variant: "default",
  name: "Panel Left Right Dashed",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelLeftRightDashedLogo;
