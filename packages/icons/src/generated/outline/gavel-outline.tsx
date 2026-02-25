/**
 * Auto-generated logo component: Gavel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GavelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GavelOutlineLogo = React.forwardRef<SVGSVGElement, GavelOutlineLogoProps>(
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
      <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
  <path d="M6 9l4 4" />
  <path d="M13 10l-4 -4" />
  <path d="M3 21h7" />
  <path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0" />
    </svg>
  )
);

GavelOutlineLogo.displayName = "GavelOutlineLogo";

export const GavelOutlineLogoMetadata = {
  id: "gavel-outline",
  baseId: "gavel-outline",
  variant: "default",
  name: "Gavel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GavelOutlineLogo;
