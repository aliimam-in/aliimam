/**
 * Auto-generated logo component: Eyeglass 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Eyeglass2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Eyeglass2OutlineLogo = React.forwardRef<SVGSVGElement, Eyeglass2OutlineLogoProps>(
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
      <path d="M8 4h-2l-3 10v2.5" />
  <path d="M16 4h2l3 10v2.5" />
  <path d="M10 16l4 0" />
  <path d="M14 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
  <path d="M3 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
    </svg>
  )
);

Eyeglass2OutlineLogo.displayName = "Eyeglass2OutlineLogo";

export const Eyeglass2OutlineLogoMetadata = {
  id: "eyeglass-2-outline",
  baseId: "eyeglass-2-outline",
  variant: "default",
  name: "Eyeglass 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Eyeglass2OutlineLogo;
