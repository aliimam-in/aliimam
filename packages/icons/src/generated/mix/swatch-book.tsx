/**
 * Auto-generated logo component: Swatch Book (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwatchBookLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwatchBookLogo = React.forwardRef<SVGSVGElement, SwatchBookLogoProps>(
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
      <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" />
  <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" />
  <path d="M 7 17h.01" />
  <path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" />
    </svg>
  )
);

SwatchBookLogo.displayName = "SwatchBookLogo";

export const SwatchBookLogoMetadata = {
  id: "swatch-book",
  baseId: "swatch-book",
  variant: "default",
  name: "Swatch Book",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwatchBookLogo;
