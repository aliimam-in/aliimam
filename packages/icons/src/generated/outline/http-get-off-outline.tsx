/**
 * Auto-generated logo component: Http Get Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpGetOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpGetOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpGetOffOutlineLogoProps>(
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
      <path d="M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
  <path d="M14 8h-2m-2 2v6h4" />
  <path d="M10 12h2" />
  <path d="M17 8h4" />
  <path d="M19 8v7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpGetOffOutlineLogo.displayName = "HttpGetOffOutlineLogo";

export const HttpGetOffOutlineLogoMetadata = {
  id: "http-get-off-outline",
  baseId: "http-get-off-outline",
  variant: "default",
  name: "Http Get Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpGetOffOutlineLogo;
