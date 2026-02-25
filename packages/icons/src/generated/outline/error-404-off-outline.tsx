/**
 * Auto-generated logo component: Error 404 Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Error404OffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Error404OffOutlineLogo = React.forwardRef<SVGSVGElement, Error404OffOutlineLogoProps>(
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
      <path d="M3 8v3a1 1 0 0 0 1 1h3" />
  <path d="M7 8v8" />
  <path d="M17 8v3a1 1 0 0 0 1 1h3" />
  <path d="M21 8v8" />
  <path d="M10 10v4a2 2 0 1 0 4 0m0 -4a2 2 0 0 0 -2 -2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

Error404OffOutlineLogo.displayName = "Error404OffOutlineLogo";

export const Error404OffOutlineLogoMetadata = {
  id: "error-404-off-outline",
  baseId: "error-404-off-outline",
  variant: "default",
  name: "Error 404 Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Error404OffOutlineLogo;
