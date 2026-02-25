/**
 * Auto-generated logo component: Http Delete Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpDeleteOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpDeleteOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpDeleteOffOutlineLogoProps>(
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
      <path d="M3 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2l-2 0" />
  <path d="M14 8h-2m-2 2v6h4" />
  <path d="M10 12h2" />
  <path d="M17 8v5m3 3h1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpDeleteOffOutlineLogo.displayName = "HttpDeleteOffOutlineLogo";

export const HttpDeleteOffOutlineLogoMetadata = {
  id: "http-delete-off-outline",
  baseId: "http-delete-off-outline",
  variant: "default",
  name: "Http Delete Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpDeleteOffOutlineLogo;
