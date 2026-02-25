/**
 * Auto-generated logo component: Http Delete Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpDeleteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpDeleteOutlineLogo = React.forwardRef<SVGSVGElement, HttpDeleteOutlineLogoProps>(
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
  <path d="M14 8h-4v8h4" />
  <path d="M10 12h2.5" />
  <path d="M17 8v8h4" />
    </svg>
  )
);

HttpDeleteOutlineLogo.displayName = "HttpDeleteOutlineLogo";

export const HttpDeleteOutlineLogoMetadata = {
  id: "http-delete-outline",
  baseId: "http-delete-outline",
  variant: "default",
  name: "Http Delete Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpDeleteOutlineLogo;
