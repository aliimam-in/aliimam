/**
 * Auto-generated logo component: Viewport Short Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ViewportShortOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ViewportShortOutlineLogo = React.forwardRef<SVGSVGElement, ViewportShortOutlineLogoProps>(
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
      <path d="M12 3v7l3 -3" />
  <path d="M9 7l3 3" />
  <path d="M12 21v-7l3 3" />
  <path d="M9 17l3 -3" />
  <path d="M18 9h1a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-1" />
  <path d="M6 9h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1" />
    </svg>
  )
);

ViewportShortOutlineLogo.displayName = "ViewportShortOutlineLogo";

export const ViewportShortOutlineLogoMetadata = {
  id: "viewport-short-outline",
  baseId: "viewport-short-outline",
  variant: "default",
  name: "Viewport Short Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ViewportShortOutlineLogo;
