/**
 * Auto-generated logo component: Loader (default)
 * Category: feather
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
      <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
    </svg>
  )
);

LoaderLogo.displayName = "LoaderLogo";

export const LoaderLogoMetadata = {
  id: "loader",
  baseId: "loader",
  variant: "default",
  name: "Loader",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LoaderLogo;
