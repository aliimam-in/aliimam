/**
 * Auto-generated logo component: Sliders Vertical (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SlidersVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SlidersVerticalLogo = React.forwardRef<SVGSVGElement, SlidersVerticalLogoProps>(
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
      <path d="M10 8h4" />
  <path d="M12 21v-9" />
  <path d="M12 8V3" />
  <path d="M17 16h4" />
  <path d="M19 12V3" />
  <path d="M19 21v-5" />
  <path d="M3 14h4" />
  <path d="M5 10V3" />
  <path d="M5 21v-7" />
    </svg>
  )
);

SlidersVerticalLogo.displayName = "SlidersVerticalLogo";

export const SlidersVerticalLogoMetadata = {
  id: "sliders-vertical",
  baseId: "sliders-vertical",
  variant: "default",
  name: "Sliders Vertical",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SlidersVerticalLogo;
