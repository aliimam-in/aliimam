/**
 * Auto-generated logo component: Http Que Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpQueOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpQueOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpQueOffOutlineLogoProps>(
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
      <path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
  <path d="M6 15l1 1" />
  <path d="M21 8h-4v8h4" />
  <path d="M17 12h2.5" />
  <path d="M10 10v4a2 2 0 1 0 4 0m0 -4v-2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpQueOffOutlineLogo.displayName = "HttpQueOffOutlineLogo";

export const HttpQueOffOutlineLogoMetadata = {
  id: "http-que-off-outline",
  baseId: "http-que-off-outline",
  variant: "default",
  name: "Http Que Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpQueOffOutlineLogo;
