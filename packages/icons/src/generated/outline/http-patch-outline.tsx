/**
 * Auto-generated logo component: Http Patch Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpPatchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpPatchOutlineLogo = React.forwardRef<SVGSVGElement, HttpPatchOutlineLogoProps>(
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
  <path d="M10 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M10 13h4" />
  <path d="M17 8h4" />
  <path d="M19 8v8" />
    </svg>
  )
);

HttpPatchOutlineLogo.displayName = "HttpPatchOutlineLogo";

export const HttpPatchOutlineLogoMetadata = {
  id: "http-patch-outline",
  baseId: "http-patch-outline",
  variant: "default",
  name: "Http Patch Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpPatchOutlineLogo;
