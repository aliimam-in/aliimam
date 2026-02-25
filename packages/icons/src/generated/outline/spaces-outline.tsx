/**
 * Auto-generated logo component: Spaces Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpacesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpacesOutlineLogo = React.forwardRef<SVGSVGElement, SpacesOutlineLogoProps>(
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
      <path d="M6.045 9.777a6 6 0 1 0 5.951 .023" />
  <path d="M11.997 20.196a6 6 0 1 0 -2.948 -5.97" />
  <path d="M17.95 9.785q .05 -.386 .05 -.785a6 6 0 1 0 -3.056 5.23" />
    </svg>
  )
);

SpacesOutlineLogo.displayName = "SpacesOutlineLogo";

export const SpacesOutlineLogoMetadata = {
  id: "spaces-outline",
  baseId: "spaces-outline",
  variant: "default",
  name: "Spaces Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpacesOutlineLogo;
