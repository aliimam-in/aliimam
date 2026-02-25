/**
 * Auto-generated logo component: Multiplier 1x Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Multiplier1xOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Multiplier1xOutlineLogo = React.forwardRef<SVGSVGElement, Multiplier1xOutlineLogoProps>(
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
      <path d="M9 16v-8l-2 2" />
  <path d="M13 16l4 -4" />
  <path d="M17 16l-4 -4" />
    </svg>
  )
);

Multiplier1xOutlineLogo.displayName = "Multiplier1xOutlineLogo";

export const Multiplier1xOutlineLogoMetadata = {
  id: "multiplier-1x-outline",
  baseId: "multiplier-1x-outline",
  variant: "default",
  name: "Multiplier 1x Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Multiplier1xOutlineLogo;
