/**
 * Auto-generated logo component: Viewport Wide Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ViewportWideOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ViewportWideOutlineLogo = React.forwardRef<SVGSVGElement, ViewportWideOutlineLogoProps>(
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
      <path d="M10 12h-7l3 -3" />
  <path d="M6 15l-3 -3" />
  <path d="M14 12h7l-3 -3" />
  <path d="M18 15l3 -3" />
  <path d="M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1" />
  <path d="M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1" />
    </svg>
  )
);

ViewportWideOutlineLogo.displayName = "ViewportWideOutlineLogo";

export const ViewportWideOutlineLogoMetadata = {
  id: "viewport-wide-outline",
  baseId: "viewport-wide-outline",
  variant: "default",
  name: "Viewport Wide Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ViewportWideOutlineLogo;
