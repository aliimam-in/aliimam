/**
 * Auto-generated logo component: Panel Bottom Close (default)
 * Category: panel
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelBottomCloseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelBottomCloseLogo = React.forwardRef<SVGSVGElement, PanelBottomCloseLogoProps>(
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
  <path d="m15 8-3 3-3-3" />
    </svg>
  )
);

PanelBottomCloseLogo.displayName = "PanelBottomCloseLogo";

export const PanelBottomCloseLogoMetadata = {
  id: "panel-bottom-close",
  baseId: "panel-bottom-close",
  variant: "default",
  name: "Panel Bottom Close",
  category: "panel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelBottomCloseLogo;
