/**
 * Auto-generated logo component: Panel Top Dashed (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelTopDashedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelTopDashedLogo = React.forwardRef<SVGSVGElement, PanelTopDashedLogoProps>(
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
  <path d="M14 9h1" />
  <path d="M19 9h2" />
  <path d="M3 9h2" />
  <path d="M9 9h1" />
    </svg>
  )
);

PanelTopDashedLogo.displayName = "PanelTopDashedLogo";

export const PanelTopDashedLogoMetadata = {
  id: "panel-top-dashed",
  baseId: "panel-top-dashed",
  variant: "default",
  name: "Panel Top Dashed",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelTopDashedLogo;
