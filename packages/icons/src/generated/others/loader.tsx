/**
 * Auto-generated logo component: Loader (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LoaderLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LoaderLogo = React.forwardRef<SVGSVGElement, LoaderLogoProps>(
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
      <path d="M12 2v4" />
  <path d="m16.2 7.8 2.9-2.9" />
  <path d="M18 12h4" />
  <path d="m16.2 16.2 2.9 2.9" />
  <path d="M12 18v4" />
  <path d="m4.9 19.1 2.9-2.9" />
  <path d="M2 12h4" />
  <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  )
);

LoaderLogo.displayName = "LoaderLogo";

export const LoaderLogoMetadata = {
  id: "loader",
  baseId: "loader",
  variant: "default",
  name: "Loader",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LoaderLogo;
