/**
 * Auto-generated logo component: Multiplier 1 5x Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Multiplier15xOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Multiplier15xOutlineLogo = React.forwardRef<SVGSVGElement, Multiplier15xOutlineLogoProps>(
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
      <path d="M4 16v-8l-2 2" />
  <path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
  <path d="M7 16v.01" />
  <path d="M17 16l4 -4" />
  <path d="M21 16l-4 -4" />
    </svg>
  )
);

Multiplier15xOutlineLogo.displayName = "Multiplier15xOutlineLogo";

export const Multiplier15xOutlineLogoMetadata = {
  id: "multiplier-1-5x-outline",
  baseId: "multiplier-1-5x-outline",
  variant: "default",
  name: "Multiplier 1 5x Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Multiplier15xOutlineLogo;
