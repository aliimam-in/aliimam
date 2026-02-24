/**
 * Auto-generated logo component: Panel Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelLeftLogo = React.forwardRef<SVGSVGElement, PanelLeftLogoProps>(
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
    </svg>
  )
);

PanelLeftLogo.displayName = "PanelLeftLogo";

export const PanelLeftLogoMetadata = {
  id: "panel-left",
  baseId: "panel-left",
  variant: "default",
  name: "Panel Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelLeftLogo;
