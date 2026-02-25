/**
 * Auto-generated logo component: Multiplier 0 5x Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Multiplier05xOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Multiplier05xOutlineLogo = React.forwardRef<SVGSVGElement, Multiplier05xOutlineLogoProps>(
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
      <path d="M8 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
  <path d="M5 16v.01" />
  <path d="M15 16l4 -4" />
  <path d="M19 16l-4 -4" />
    </svg>
  )
);

Multiplier05xOutlineLogo.displayName = "Multiplier05xOutlineLogo";

export const Multiplier05xOutlineLogoMetadata = {
  id: "multiplier-0-5x-outline",
  baseId: "multiplier-0-5x-outline",
  variant: "default",
  name: "Multiplier 0 5x Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Multiplier05xOutlineLogo;
