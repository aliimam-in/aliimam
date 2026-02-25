/**
 * Auto-generated logo component: Http Post Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HttpPostOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HttpPostOffOutlineLogo = React.forwardRef<SVGSVGElement, HttpPostOffOutlineLogoProps>(
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
  <path d="M12 8a2 2 0 0 1 2 2m0 4a2 2 0 1 1 -4 0v-4" />
  <path d="M20 16a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HttpPostOffOutlineLogo.displayName = "HttpPostOffOutlineLogo";

export const HttpPostOffOutlineLogoMetadata = {
  id: "http-post-off-outline",
  baseId: "http-post-off-outline",
  variant: "default",
  name: "Http Post Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HttpPostOffOutlineLogo;
