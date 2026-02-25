/**
 * Auto-generated logo component: Http Head Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpHeadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpHeadOutlineLogo = React.forwardRef<SVGSVGElement, HttpHeadOutlineLogoProps>(
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
      <path d="M3 16v-8" />
  <path d="M7 8v8" />
  <path d="M3 12h4" />
  <path d="M14 8h-4v8h4" />
  <path d="M10 12h2.5" />
  <path d="M17 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M17 13h4" />
    </svg>
  )
);

HttpHeadOutlineLogo.displayName = "HttpHeadOutlineLogo";

export const HttpHeadOutlineLogoMetadata = {
  id: "http-head-outline",
  baseId: "http-head-outline",
  variant: "default",
  name: "Http Head Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpHeadOutlineLogo;
