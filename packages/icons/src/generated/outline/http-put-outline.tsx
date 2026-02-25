/**
 * Auto-generated logo component: Http Put Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpPutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpPutOutlineLogo = React.forwardRef<SVGSVGElement, HttpPutOutlineLogoProps>(
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
  <path d="M10 8v6a2 2 0 1 0 4 0v-6" />
    </svg>
  )
);

HttpPutOutlineLogo.displayName = "HttpPutOutlineLogo";

export const HttpPutOutlineLogoMetadata = {
  id: "http-put-outline",
  baseId: "http-put-outline",
  variant: "default",
  name: "Http Put Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpPutOutlineLogo;
