/**
 * Auto-generated logo component: Pokeball Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PokeballOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PokeballOutlineLogo = React.forwardRef<SVGSVGElement, PokeballOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M3 12h6" />
  <path d="M15 12h6" />
    </svg>
  )
);

PokeballOutlineLogo.displayName = "PokeballOutlineLogo";

export const PokeballOutlineLogoMetadata = {
  id: "pokeball-outline",
  baseId: "pokeball-outline",
  variant: "default",
  name: "Pokeball Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PokeballOutlineLogo;
