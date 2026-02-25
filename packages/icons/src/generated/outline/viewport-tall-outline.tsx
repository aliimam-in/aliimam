/**
 * Auto-generated logo component: Viewport Tall Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ViewportTallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ViewportTallOutlineLogo = React.forwardRef<SVGSVGElement, ViewportTallOutlineLogoProps>(
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
      <path d="M12 10v-7l3 3" />
  <path d="M9 6l3 -3" />
  <path d="M12 14v7l3 -3" />
  <path d="M9 18l3 3" />
  <path d="M18 3h1a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-1" />
  <path d="M6 3h-1a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h1" />
    </svg>
  )
);

ViewportTallOutlineLogo.displayName = "ViewportTallOutlineLogo";

export const ViewportTallOutlineLogoMetadata = {
  id: "viewport-tall-outline",
  baseId: "viewport-tall-outline",
  variant: "default",
  name: "Viewport Tall Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ViewportTallOutlineLogo;
