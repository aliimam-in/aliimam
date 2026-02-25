/**
 * Auto-generated logo component: Error 404 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Error404OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Error404OutlineLogo = React.forwardRef<SVGSVGElement, Error404OutlineLogoProps>(
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
  <path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
    </svg>
  )
);

Error404OutlineLogo.displayName = "Error404OutlineLogo";

export const Error404OutlineLogoMetadata = {
  id: "error-404-outline",
  baseId: "error-404-outline",
  variant: "default",
  name: "Error 404 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Error404OutlineLogo;
