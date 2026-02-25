/**
 * Auto-generated logo component: Zoom Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomExclamationOutlineLogo = React.forwardRef<SVGSVGElement, ZoomExclamationOutlineLogoProps>(
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
  <path d="M21 21l-6 -6" />
  <path d="M10 13v.01" />
  <path d="M10 7v3" />
    </svg>
  )
);

ZoomExclamationOutlineLogo.displayName = "ZoomExclamationOutlineLogo";

export const ZoomExclamationOutlineLogoMetadata = {
  id: "zoom-exclamation-outline",
  baseId: "zoom-exclamation-outline",
  variant: "default",
  name: "Zoom Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomExclamationOutlineLogo;
