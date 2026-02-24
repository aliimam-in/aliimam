/**
 * Auto-generated logo component: Sliders Horizontal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SlidersHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SlidersHorizontalLogo = React.forwardRef<SVGSVGElement, SlidersHorizontalLogoProps>(
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
      <path d="M10 5H3" />
  <path d="M12 19H3" />
  <path d="M14 3v4" />
  <path d="M16 17v4" />
  <path d="M21 12h-9" />
  <path d="M21 19h-5" />
  <path d="M21 5h-7" />
  <path d="M8 10v4" />
  <path d="M8 12H3" />
    </svg>
  )
);

SlidersHorizontalLogo.displayName = "SlidersHorizontalLogo";

export const SlidersHorizontalLogoMetadata = {
  id: "sliders-horizontal",
  baseId: "sliders-horizontal",
  variant: "default",
  name: "Sliders Horizontal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SlidersHorizontalLogo;
