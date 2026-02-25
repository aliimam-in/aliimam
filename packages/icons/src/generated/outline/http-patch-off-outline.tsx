/**
 * Auto-generated logo component: Http Patch Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpPatchOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpPatchOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpPatchOffOutlineLogoProps>(
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
      <path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
  <path d="M10 16v-6m2 -2a2 2 0 0 1 2 2m0 4v2" />
  <path d="M10 13h3" />
  <path d="M17 8h4" />
  <path d="M19 8v7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpPatchOffOutlineLogo.displayName = "HttpPatchOffOutlineLogo";

export const HttpPatchOffOutlineLogoMetadata = {
  id: "http-patch-off-outline",
  baseId: "http-patch-off-outline",
  variant: "default",
  name: "Http Patch Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpPatchOffOutlineLogo;
