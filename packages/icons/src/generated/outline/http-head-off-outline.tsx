/**
 * Auto-generated logo component: Http Head Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpHeadOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpHeadOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpHeadOffOutlineLogoProps>(
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
  <path d="M14 8h-2m-2 2v6h4" />
  <path d="M10 12h2" />
  <path d="M17 13v-3a2 2 0 1 1 4 0v6" />
  <path d="M17 13h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpHeadOffOutlineLogo.displayName = "HttpHeadOffOutlineLogo";

export const HttpHeadOffOutlineLogoMetadata = {
  id: "http-head-off-outline",
  baseId: "http-head-off-outline",
  variant: "default",
  name: "Http Head Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpHeadOffOutlineLogo;
