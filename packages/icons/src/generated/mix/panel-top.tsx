/**
 * Auto-generated logo component: Panel Top (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelTopLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelTopLogo = React.forwardRef<SVGSVGElement, PanelTopLogoProps>(
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
    </svg>
  )
);

PanelTopLogo.displayName = "PanelTopLogo";

export const PanelTopLogoMetadata = {
  id: "panel-top",
  baseId: "panel-top",
  variant: "default",
  name: "Panel Top",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelTopLogo;
