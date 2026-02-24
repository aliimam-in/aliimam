/**
 * Auto-generated logo component: Panel Top Bottom Dashed (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelTopBottomDashedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelTopBottomDashedLogo = React.forwardRef<SVGSVGElement, PanelTopBottomDashedLogoProps>(
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
      <path d="M14 15h1" />
  <path d="M14 9h1" />
  <path d="M19 15h2" />
  <path d="M19 9h2" />
  <path d="M3 15h2" />
  <path d="M3 9h2" />
  <path d="M9 15h1" />
  <path d="M9 9h1" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);

PanelTopBottomDashedLogo.displayName = "PanelTopBottomDashedLogo";

export const PanelTopBottomDashedLogoMetadata = {
  id: "panel-top-bottom-dashed",
  baseId: "panel-top-bottom-dashed",
  variant: "default",
  name: "Panel Top Bottom Dashed",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelTopBottomDashedLogo;
