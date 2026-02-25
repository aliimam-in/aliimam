/**
 * Auto-generated logo component: Panel Right Close (default)
 * Category: panel
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelRightCloseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelRightCloseLogo = React.forwardRef<SVGSVGElement, PanelRightCloseLogoProps>(
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
  <path d="m8 9 3 3-3 3" />
    </svg>
  )
);

PanelRightCloseLogo.displayName = "PanelRightCloseLogo";

export const PanelRightCloseLogoMetadata = {
  id: "panel-right-close",
  baseId: "panel-right-close",
  variant: "default",
  name: "Panel Right Close",
  category: "panel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelRightCloseLogo;
