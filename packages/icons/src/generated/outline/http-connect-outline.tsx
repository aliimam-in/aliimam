/**
 * Auto-generated logo component: Http Connect Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpConnectOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpConnectOutlineLogo = React.forwardRef<SVGSVGElement, HttpConnectOutlineLogoProps>(
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
  <path d="M17 16v-8l4 8v-8" />
  <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
    </svg>
  )
);

HttpConnectOutlineLogo.displayName = "HttpConnectOutlineLogo";

export const HttpConnectOutlineLogoMetadata = {
  id: "http-connect-outline",
  baseId: "http-connect-outline",
  variant: "default",
  name: "Http Connect Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpConnectOutlineLogo;
