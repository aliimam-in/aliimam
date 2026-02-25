/**
 * Auto-generated logo component: Zoom Out Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomOutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomOutOutlineLogo = React.forwardRef<SVGSVGElement, ZoomOutOutlineLogoProps>(
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
  <path d="M21 21l-6 -6" />
    </svg>
  )
);

ZoomOutOutlineLogo.displayName = "ZoomOutOutlineLogo";

export const ZoomOutOutlineLogoMetadata = {
  id: "zoom-out-outline",
  baseId: "zoom-out-outline",
  variant: "default",
  name: "Zoom Out Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomOutOutlineLogo;
