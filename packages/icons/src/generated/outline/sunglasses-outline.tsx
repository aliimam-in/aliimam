/**
 * Auto-generated logo component: Sunglasses Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunglassesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunglassesOutlineLogo = React.forwardRef<SVGSVGElement, SunglassesOutlineLogoProps>(
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
      <path d="M8 4h-2l-3 10" />
  <path d="M16 4h2l3 10" />
  <path d="M10 16h4" />
  <path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
  <path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
  <path d="M4 14l4.5 4.5" />
  <path d="M15 14l4.5 4.5" />
    </svg>
  )
);

SunglassesOutlineLogo.displayName = "SunglassesOutlineLogo";

export const SunglassesOutlineLogoMetadata = {
  id: "sunglasses-outline",
  baseId: "sunglasses-outline",
  variant: "default",
  name: "Sunglasses Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunglassesOutlineLogo;
