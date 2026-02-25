/**
 * Auto-generated logo component: Guitar Pick Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GuitarPickOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GuitarPickOutlineLogo = React.forwardRef<SVGSVGElement, GuitarPickOutlineLogoProps>(
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
      <path d="M16 18.5c2 -2.5 4 -6.5 4 -10.5c0 -2.946 -2.084 -4.157 -4.204 -4.654c-.864 -.23 -2.13 -.346 -3.796 -.346c-1.667 0 -2.932 .115 -3.796 .346c-2.12 .497 -4.204 1.708 -4.204 4.654c0 3.312 2 8 4 10.5c.297 .37 .618 .731 .963 1.081l.354 .347a3.9 3.9 0 0 0 5.364 0a14.05 14.05 0 0 0 1.319 -1.428" />
    </svg>
  )
);

GuitarPickOutlineLogo.displayName = "GuitarPickOutlineLogo";

export const GuitarPickOutlineLogoMetadata = {
  id: "guitar-pick-outline",
  baseId: "guitar-pick-outline",
  variant: "default",
  name: "Guitar Pick Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GuitarPickOutlineLogo;
