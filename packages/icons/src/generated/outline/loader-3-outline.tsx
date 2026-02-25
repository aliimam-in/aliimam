/**
 * Auto-generated logo component: Loader 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Loader3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Loader3OutlineLogo = React.forwardRef<SVGSVGElement, Loader3OutlineLogoProps>(
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
      <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
  <path d="M17 12a5 5 0 1 0 -5 5" />
    </svg>
  )
);

Loader3OutlineLogo.displayName = "Loader3OutlineLogo";

export const Loader3OutlineLogoMetadata = {
  id: "loader-3-outline",
  baseId: "loader-3-outline",
  variant: "default",
  name: "Loader 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Loader3OutlineLogo;
