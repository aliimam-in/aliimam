/**
 * Auto-generated logo component: Zoom In Area Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomInAreaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomInAreaOutlineLogo = React.forwardRef<SVGSVGElement, ZoomInAreaOutlineLogoProps>(
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
      <path d="M15 13v4" />
  <path d="M13 15h4" />
  <path d="M10 15a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M22 22l-3 -3" />
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
  <path d="M3 11v-1" />
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
  <path d="M10 3h1" />
  <path d="M15 3h1a2 2 0 0 1 2 2v1" />
    </svg>
  )
);

ZoomInAreaOutlineLogo.displayName = "ZoomInAreaOutlineLogo";

export const ZoomInAreaOutlineLogoMetadata = {
  id: "zoom-in-area-outline",
  baseId: "zoom-in-area-outline",
  variant: "default",
  name: "Zoom In Area Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomInAreaOutlineLogo;
