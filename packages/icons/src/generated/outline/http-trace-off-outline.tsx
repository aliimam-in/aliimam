/**
 * Auto-generated logo component: Http Trace Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpTraceOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpTraceOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpTraceOffOutlineLogoProps>(
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
      <path d="M3 8h4" />
  <path d="M5 8v8" />
  <path d="M10 12h2m2 -2a2 2 0 0 0 -2 -2m-2 2v6" />
  <path d="M14 16l-3 -4" />
  <path d="M17 13v-3a2 2 0 1 1 4 0v6" />
  <path d="M17 13h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpTraceOffOutlineLogo.displayName = "HttpTraceOffOutlineLogo";

export const HttpTraceOffOutlineLogoMetadata = {
  id: "http-trace-off-outline",
  baseId: "http-trace-off-outline",
  variant: "default",
  name: "Http Trace Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpTraceOffOutlineLogo;
