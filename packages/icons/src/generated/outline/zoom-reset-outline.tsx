/**
 * Auto-generated logo component: Zoom Reset Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomResetOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomResetOutlineLogo = React.forwardRef<SVGSVGElement, ZoomResetOutlineLogoProps>(
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
      <path d="M21 21l-6 -6" />
  <path d="M3.268 12.043a7.017 7.017 0 0 0 6.634 4.957a7.012 7.012 0 0 0 7.043 -6.131a7 7 0 0 0 -5.314 -7.672a7.021 7.021 0 0 0 -8.241 4.403" />
  <path d="M3 4v4h4" />
    </svg>
  )
);

ZoomResetOutlineLogo.displayName = "ZoomResetOutlineLogo";

export const ZoomResetOutlineLogoMetadata = {
  id: "zoom-reset-outline",
  baseId: "zoom-reset-outline",
  variant: "default",
  name: "Zoom Reset Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomResetOutlineLogo;
