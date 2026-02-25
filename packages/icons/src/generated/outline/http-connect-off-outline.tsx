/**
 * Auto-generated logo component: Http Connect Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpConnectOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpConnectOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpConnectOffOutlineLogoProps>(
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
      <path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
  <path d="M17 13v-5l4 8v-8" />
  <path d="M14 14a2 2 0 1 1 -4 0v-4m2 -2a2 2 0 0 1 2 2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpConnectOffOutlineLogo.displayName = "HttpConnectOffOutlineLogo";

export const HttpConnectOffOutlineLogoMetadata = {
  id: "http-connect-off-outline",
  baseId: "http-connect-off-outline",
  variant: "default",
  name: "Http Connect Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpConnectOffOutlineLogo;
