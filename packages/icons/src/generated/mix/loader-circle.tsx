/**
 * Auto-generated logo component: Loader Circle (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LoaderCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LoaderCircleLogo = React.forwardRef<SVGSVGElement, LoaderCircleLogoProps>(
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
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
);

LoaderCircleLogo.displayName = "LoaderCircleLogo";

export const LoaderCircleLogoMetadata = {
  id: "loader-circle",
  baseId: "loader-circle",
  variant: "default",
  name: "Loader Circle",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LoaderCircleLogo;
