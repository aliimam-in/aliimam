/**
 * Auto-generated logo component: Zoom In Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomInOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomInOutlineLogo = React.forwardRef<SVGSVGElement, ZoomInOutlineLogoProps>(
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
      <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M10 7l0 6" />
  <path d="M21 21l-6 -6" />
    </svg>
  )
);

ZoomInOutlineLogo.displayName = "ZoomInOutlineLogo";

export const ZoomInOutlineLogoMetadata = {
  id: "zoom-in-outline",
  baseId: "zoom-in-outline",
  variant: "default",
  name: "Zoom In Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomInOutlineLogo;
