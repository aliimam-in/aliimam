/**
 * Auto-generated logo component: Http Trace Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpTraceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpTraceOutlineLogo = React.forwardRef<SVGSVGElement, HttpTraceOutlineLogoProps>(
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
  <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8" />
  <path d="M14 16l-3 -4" />
  <path d="M17 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M17 13h4" />
    </svg>
  )
);

HttpTraceOutlineLogo.displayName = "HttpTraceOutlineLogo";

export const HttpTraceOutlineLogoMetadata = {
  id: "http-trace-outline",
  baseId: "http-trace-outline",
  variant: "default",
  name: "Http Trace Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpTraceOutlineLogo;
