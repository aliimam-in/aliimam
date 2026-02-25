/**
 * Auto-generated logo component: Svg Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SvgOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SvgOutlineLogo = React.forwardRef<SVGSVGElement, SvgOutlineLogoProps>(
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
      <path d="M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
  <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" />
  <path d="M10 8l1.5 8h1l1.5 -8" />
    </svg>
  )
);

SvgOutlineLogo.displayName = "SvgOutlineLogo";

export const SvgOutlineLogoMetadata = {
  id: "svg-outline",
  baseId: "svg-outline",
  variant: "default",
  name: "Svg Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SvgOutlineLogo;
