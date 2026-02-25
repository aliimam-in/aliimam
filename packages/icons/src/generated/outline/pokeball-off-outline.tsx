/**
 * Auto-generated logo component: Pokeball Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PokeballOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PokeballOffOutlineLogo = React.forwardRef<SVGSVGElement, PokeballOffOutlineLogoProps>(
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
      <path d="M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
  <path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57 -3.441a3.012 3.012 0 0 0 -1.41 -1.39" />
  <path d="M3 12h6m7 0h5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PokeballOffOutlineLogo.displayName = "PokeballOffOutlineLogo";

export const PokeballOffOutlineLogoMetadata = {
  id: "pokeball-off-outline",
  baseId: "pokeball-off-outline",
  variant: "default",
  name: "Pokeball Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PokeballOffOutlineLogo;
