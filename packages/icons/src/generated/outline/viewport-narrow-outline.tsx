/**
 * Auto-generated logo component: Viewport Narrow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ViewportNarrowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ViewportNarrowOutlineLogo = React.forwardRef<SVGSVGElement, ViewportNarrowOutlineLogoProps>(
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
      <path d="M3 12h7l-3 -3" />
  <path d="M7 15l3 -3" />
  <path d="M21 12h-7l3 -3" />
  <path d="M17 15l-3 -3" />
  <path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
  <path d="M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1" />
    </svg>
  )
);

ViewportNarrowOutlineLogo.displayName = "ViewportNarrowOutlineLogo";

export const ViewportNarrowOutlineLogoMetadata = {
  id: "viewport-narrow-outline",
  baseId: "viewport-narrow-outline",
  variant: "default",
  name: "Viewport Narrow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ViewportNarrowOutlineLogo;
