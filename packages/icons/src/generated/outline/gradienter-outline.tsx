/**
 * Auto-generated logo component: Gradienter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GradienterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GradienterOutlineLogo = React.forwardRef<SVGSVGElement, GradienterOutlineLogoProps>(
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
      <path d="M3.227 14c.917 4 4.497 7 8.773 7c4.277 0 7.858 -3 8.773 -7" />
  <path d="M20.78 10a9 9 0 0 0 -8.78 -7a8.985 8.985 0 0 0 -8.782 7" />
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

GradienterOutlineLogo.displayName = "GradienterOutlineLogo";

export const GradienterOutlineLogoMetadata = {
  id: "gradienter-outline",
  baseId: "gradienter-outline",
  variant: "default",
  name: "Gradienter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GradienterOutlineLogo;
