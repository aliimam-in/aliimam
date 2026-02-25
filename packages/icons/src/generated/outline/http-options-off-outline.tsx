/**
 * Auto-generated logo component: Http Options Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpOptionsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpOptionsOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpOptionsOffOutlineLogoProps>(
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
  <path d="M10 12h2m2 -2a2 2 0 0 0 -2 -2m-2 2v6" />
  <path d="M17 8h4" />
  <path d="M19 8v7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpOptionsOffOutlineLogo.displayName = "HttpOptionsOffOutlineLogo";

export const HttpOptionsOffOutlineLogoMetadata = {
  id: "http-options-off-outline",
  baseId: "http-options-off-outline",
  variant: "default",
  name: "Http Options Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpOptionsOffOutlineLogo;
