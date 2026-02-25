/**
 * Auto-generated logo component: Http Que Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpQueOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpQueOutlineLogo = React.forwardRef<SVGSVGElement, HttpQueOutlineLogoProps>(
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
  <path d="M10 8v6a2 2 0 1 0 4 0v-6" />
    </svg>
  )
);

HttpQueOutlineLogo.displayName = "HttpQueOutlineLogo";

export const HttpQueOutlineLogoMetadata = {
  id: "http-que-outline",
  baseId: "http-que-outline",
  variant: "default",
  name: "Http Que Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpQueOutlineLogo;
