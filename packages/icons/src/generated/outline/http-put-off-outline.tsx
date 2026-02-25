/**
 * Auto-generated logo component: Http Put Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpPutOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpPutOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpPutOffOutlineLogoProps>(
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
  <path d="M17 8h4" />
  <path d="M19 8v8" />
  <path d="M10 10v4a2 2 0 1 0 4 0m0 -4v-2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpPutOffOutlineLogo.displayName = "HttpPutOffOutlineLogo";

export const HttpPutOffOutlineLogoMetadata = {
  id: "http-put-off-outline",
  baseId: "http-put-off-outline",
  variant: "default",
  name: "Http Put Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpPutOffOutlineLogo;
