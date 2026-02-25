/**
 * Auto-generated logo component: Loader Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LoaderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LoaderOutlineLogo = React.forwardRef<SVGSVGElement, LoaderOutlineLogoProps>(
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
      <path d="M12 6l0 -3" />
  <path d="M16.25 7.75l2.15 -2.15" />
  <path d="M18 12l3 0" />
  <path d="M16.25 16.25l2.15 2.15" />
  <path d="M12 18l0 3" />
  <path d="M7.75 16.25l-2.15 2.15" />
  <path d="M6 12l-3 0" />
  <path d="M7.75 7.75l-2.15 -2.15" />
    </svg>
  )
);

LoaderOutlineLogo.displayName = "LoaderOutlineLogo";

export const LoaderOutlineLogoMetadata = {
  id: "loader-outline",
  baseId: "loader-outline",
  variant: "default",
  name: "Loader Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LoaderOutlineLogo;
