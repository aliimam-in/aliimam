/**
 * Auto-generated logo component: Zoom Replace Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomReplaceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomReplaceOutlineLogo = React.forwardRef<SVGSVGElement, ZoomReplaceOutlineLogoProps>(
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
  <path d="M3.291 8a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403" />
  <path d="M17 4v4h-4" />
  <path d="M16.705 12a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403" />
  <path d="M3 16v-4h4" />
    </svg>
  )
);

ZoomReplaceOutlineLogo.displayName = "ZoomReplaceOutlineLogo";

export const ZoomReplaceOutlineLogoMetadata = {
  id: "zoom-replace-outline",
  baseId: "zoom-replace-outline",
  variant: "default",
  name: "Zoom Replace Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomReplaceOutlineLogo;
