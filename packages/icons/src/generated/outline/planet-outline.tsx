/**
 * Auto-generated logo component: Planet Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlanetOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlanetOutlineLogo = React.forwardRef<SVGSVGElement, PlanetOutlineLogoProps>(
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
      <path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805" />
  <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    </svg>
  )
);

PlanetOutlineLogo.displayName = "PlanetOutlineLogo";

export const PlanetOutlineLogoMetadata = {
  id: "planet-outline",
  baseId: "planet-outline",
  variant: "default",
  name: "Planet Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlanetOutlineLogo;
