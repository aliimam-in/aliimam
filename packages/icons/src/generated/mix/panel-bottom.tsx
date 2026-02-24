/**
 * Auto-generated logo component: Panel Bottom (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelBottomLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelBottomLogo = React.forwardRef<SVGSVGElement, PanelBottomLogoProps>(
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
  <path d="M3 15h18" />
    </svg>
  )
);

PanelBottomLogo.displayName = "PanelBottomLogo";

export const PanelBottomLogoMetadata = {
  id: "panel-bottom",
  baseId: "panel-bottom",
  variant: "default",
  name: "Panel Bottom",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelBottomLogo;
