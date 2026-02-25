/**
 * Auto-generated logo component: Layout Grid (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutGridFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutGridFilledLogo = React.forwardRef<SVGSVGElement, LayoutGridFilledLogoProps>(
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
      <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
  <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
  <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
  <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
    </svg>
  )
);

LayoutGridFilledLogo.displayName = "LayoutGridFilledLogo";

export const LayoutGridFilledLogoMetadata = {
  id: "layout-grid_filled",
  baseId: "layout-grid",
  variant: "filled",
  name: "Layout Grid",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutGridFilledLogo;
